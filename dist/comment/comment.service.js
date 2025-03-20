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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let CommentService = class CommentService {
    constructor(db) {
        this.db = db;
    }
    async create(createCommentDto) {
        const { name, email, content, PostId, userId } = createCommentDto;
        try {
            const comment = await this.db.comment.create({
                data: {
                    name,
                    email,
                    content,
                    Post: PostId ? { connect: { id: PostId } } : undefined,
                },
                include: { Post: true },
            });
            return comment;
        }
        catch (error) {
            throw new Error(`Failed to create comment: ${error.message}`);
        }
    }
    async findAll() {
        return await this.db.comment.findMany({
            include: { Post: true },
        });
    }
    async findOne(id) {
        const comment = await this.db.comment.findUnique({
            where: { id },
            include: { Post: true },
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comment with ID ${id} not found`);
        }
        return comment;
    }
    async update(id, updateCommentDto) {
        try {
            const comment = await this.db.comment.update({
                where: { id },
                data: updateCommentDto,
                include: { Post: true },
            });
            return comment;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Failed to update comment: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            return await this.db.comment.delete({ where: { id } });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Failed to delete comment: ${error.message}`);
        }
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map