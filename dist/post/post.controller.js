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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const post_service_1 = require("./post.service");
const create_post_dto_1 = require("./dto/create-post.dto");
const update_post_dto_1 = require("./dto/update-post.dto");
const client_1 = require("@prisma/client");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async create(createPostDto) {
        return await this.postService.create(createPostDto);
    }
    async findAll(category) {
        return await this.postService.findAll(category || null);
    }
    async findOne(id) {
        return await this.postService.findOne(id);
    }
    async update(id, updatePostDto) {
        return await this.postService.update(id, updatePostDto);
    }
    async remove(id) {
        return await this.postService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new post' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Post successfully created' }),
    (0, swagger_1.ApiBody)({ type: create_post_dto_1.CreatePostDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDTO]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all posts (optional filtering by category)' }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false, enum: client_1.Category, description: 'Filter by category' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of posts retrieved successfully' }),
    __param(0, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a post by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'Post ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Post retrieved successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a post by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'Post ID' }),
    (0, swagger_1.ApiBody)({ type: update_post_dto_1.UpdatePostDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Post updated successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a post by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'Post ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Post deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "remove", null);
PostController = __decorate([
    (0, swagger_1.ApiTags)('Post'),
    (0, common_1.Controller)('post'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map