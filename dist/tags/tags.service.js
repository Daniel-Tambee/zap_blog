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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let TagsService = class TagsService {
    constructor(db) {
        this.db = db;
    }
    async create(createTagDto) {
        try {
            const tag = await this.db.tags.create({
                data: Object.assign({}, createTagDto),
            });
            return tag;
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            const tags = await this.db.tags.findMany();
            return tags;
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const tag = await this.db.tags.findUnique({
                where: { id },
            });
            if (!tag) {
                throw new Error(`Tag with id ${id} not found`);
            }
            return tag;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateTagDto) {
        try {
            const tag = await this.db.tags.update({
                where: { id },
                data: updateTagDto,
            });
            return tag;
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const tag = await this.db.tags.delete({
                where: { id },
            });
            return tag;
        }
        catch (error) {
            throw error;
        }
    }
};
TagsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], TagsService);
exports.TagsService = TagsService;
//# sourceMappingURL=tags.service.js.map