"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let PostService = class PostService {
    constructor(db) {
        this.db = db;
    }
    async create(createPostDto) {
        var _a;
        try {
            const { tags, category, Categories } = createPostDto, postData = __rest(createPostDto, ["tags", "category", "Categories"]);
            const existingTags = await this.db.tags.findMany({
                where: {
                    name: {
                        in: ((_a = tags === null || tags === void 0 ? void 0 : tags.map((tag) => tag.name)) !== null && _a !== void 0 ? _a : []).filter((name) => name),
                    },
                },
            });
            const existingCategories = await this.db.categoryThing.findMany({
                where: {
                    name: {
                        in: Categories,
                    },
                },
            });
            const existingCategory = await this.db.categoryThing.findFirst({
                where: { name: category },
            });
            const tagRecords = await Promise.all(tags.map(async (tagDto) => {
                const { name } = tagDto;
                const existingTag = existingTags.find((tag) => tag.name === name);
                if (existingTag) {
                    return { id: existingTag.id };
                }
                const newTag = await this.db.tags.create({
                    data: { name },
                });
                return { id: newTag.id };
            }));
            const categoryRecords = await Promise.all(Categories.map(async (categoryName) => {
                const existingCategory = existingCategories.find((category) => category.name === categoryName);
                if (existingCategory) {
                    return { id: existingCategory.id };
                }
                const newCategory = await this.db.categoryThing.create({
                    data: { name: categoryName },
                });
                return { id: newCategory.id };
            }));
            const post = await this.db.post.create({
                data: Object.assign(Object.assign({}, postData), { tags: {
                        connect: tagRecords,
                    }, category: 'Press', Categories: {
                        connect: categoryRecords,
                    } }),
                include: { tags: true, Categories: true },
            });
            return post;
        }
        catch (error) {
            console.error('Error creating post:', error);
            throw new Error(`Failed to create post: ${error.message || error}`);
        }
    }
    async findAll(category) {
        try {
            if (!category) {
                const posts = await this.db.post.findMany({
                    include: { tags: true },
                });
                return posts;
            }
            const posts = await this.db.post.findMany({
                where: { category },
                include: { tags: true },
            });
            return posts;
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const post = await this.db.post.findUniqueOrThrow({
                where: { id },
                include: { tags: true },
            });
            if (!post) {
                throw new Error(`Post with id ${id} not found`);
            }
            return post;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updatePostDto) {
        try {
            const { tags } = updatePostDto, postData = __rest(updatePostDto, ["tags"]);
            const updateData = Object.assign({}, postData);
            if (tags) {
                updateData.tags = {
                    set: tags.map((tagId) => ({ id: tagId })),
                };
            }
            const post = await this.db.post.update({
                where: { id },
                data: updateData,
                include: { tags: true },
            });
            return post;
        }
        catch (error) {
            throw error;
        }
    }
    async getRecentPosts() {
        try {
            const latestPosts = await this.db.post.findMany({
                orderBy: {
                    created_at: 'desc',
                },
            });
            return latestPosts;
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const post = await this.db.post.delete({
                where: { id },
            });
            return post;
        }
        catch (error) {
            throw error;
        }
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map