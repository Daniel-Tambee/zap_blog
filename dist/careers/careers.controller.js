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
exports.CareersController = void 0;
const common_1 = require("@nestjs/common");
const careers_service_1 = require("./careers.service");
const swagger_1 = require("@nestjs/swagger");
const UpdateCareerDto_1 = require("./UpdateCareerDto");
const CreateCareerDTO_1 = require("./CreateCareerDTO");
let CareersController = class CareersController {
    constructor(careersService) {
        this.careersService = careersService;
    }
    async create(createCareerDto) {
        return await this.careersService.create(createCareerDto);
    }
    async findAll() {
        return await this.careersService.findAll();
    }
    async findOne(id) {
        return await this.careersService.findOne(id);
    }
    async update(id, updateCareerDto) {
        return await this.careersService.update(id, updateCareerDto);
    }
    async getOtherJobs() {
        return await this.careersService.getOtherJobs();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new job posting' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The job has been successfully created.',
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCareerDTO_1.CreateCareerDTO]),
    __metadata("design:returntype", Promise)
], CareersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all job postings' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of jobs retrieved successfully.',
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CareersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a job posting by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Job retrieved successfully.' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CareersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a job posting' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Job updated successfully.' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateCareerDto_1.UpdateCareerDto]),
    __metadata("design:returntype", Promise)
], CareersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get additional job postings labeled as "other jobs"',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Other jobs retrieved successfully.',
    }),
    (0, common_1.Get)('other/jobs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CareersController.prototype, "getOtherJobs", null);
CareersController = __decorate([
    (0, swagger_1.ApiTags)('Careers'),
    (0, common_1.Controller)('careers'),
    __metadata("design:paramtypes", [careers_service_1.CareersService])
], CareersController);
exports.CareersController = CareersController;
//# sourceMappingURL=careers.controller.js.map