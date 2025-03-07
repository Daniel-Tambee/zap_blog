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
exports.CreatePostDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_tag_dto_1 = require("../../tags/dto/create-tag.dto");
class CreatePostDTO {
    constructor() {
        this.category = client_1.Category.Opinion_Pieces;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL of the image associated with the post' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Title of the post' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Content of the post' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Author of the post' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tags associated with the post',
        type: [create_tag_dto_1.CreateTagDto],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_tag_dto_1.CreateTagDto),
    __metadata("design:type", Array)
], CreatePostDTO.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category of the post',
        enum: client_1.Category,
        default: client_1.Category.Opinion_Pieces,
    }),
    (0, class_validator_1.IsEnum)(client_1.Category),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "category", void 0);
exports.CreatePostDTO = CreatePostDTO;
//# sourceMappingURL=create-post.dto.js.map