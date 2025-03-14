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
exports.TagsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tags_service_1 = require("./tags.service");
const create_tag_dto_1 = require("./dto/create-tag.dto");
const update_tag_dto_1 = require("./dto/update-tag.dto");
let TagsController = class TagsController {
    constructor(tagsService) {
        this.tagsService = tagsService;
    }
    async create(createTagDto) {
        return await this.tagsService.create(createTagDto);
    }
    async findAll() {
        return await this.tagsService.findAll();
    }
    async findOne(id) {
        return await this.tagsService.findOne(id);
    }
    async update(id, updateTagDto) {
        return await this.tagsService.update(id, updateTagDto);
    }
    async remove(id) {
        return await this.tagsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tag' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Tag successfully created' }),
    (0, swagger_1.ApiBody)({ type: create_tag_dto_1.CreateTagDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tag_dto_1.CreateTagDto]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tags' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of tags retrieved successfully' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tag by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'Tag ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tag retrieved successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tag by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'Tag ID' }),
    (0, swagger_1.ApiBody)({ type: update_tag_dto_1.UpdateTagDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tag updated successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tag_dto_1.UpdateTagDto]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tag by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'Tag ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tag deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "remove", null);
TagsController = __decorate([
    (0, swagger_1.ApiTags)('Tags'),
    (0, common_1.Controller)('tags'),
    __metadata("design:paramtypes", [tags_service_1.TagsService])
], TagsController);
exports.TagsController = TagsController;
//# sourceMappingURL=tags.controller.js.map