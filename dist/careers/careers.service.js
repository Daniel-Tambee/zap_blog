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
exports.CareersService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let CareersService = class CareersService {
    constructor(db) {
        this.db = db;
    }
    async create(createJobsDto) {
        try {
            const newJob = await this.db.jobs.create({
                data: createJobsDto,
            });
            return newJob;
        }
        catch (error) {
            console.error('Error creating job:', error);
            throw new Error('Failed to create job');
        }
    }
    async findOne(id) {
        try {
            const job = await this.db.jobs.findUnique({
                where: { id },
            });
            if (!job) {
                throw new Error('Job not found');
            }
            return job;
        }
        catch (error) {
            console.error(`Error fetching job with ID ${id}:`, error);
            throw new Error('Failed to fetch job');
        }
    }
    async findAll() {
        try {
            const jobs = await this.db.jobs.findMany();
            return jobs;
        }
        catch (error) {
            console.error('Error fetching all jobs:', error);
            throw new Error('Failed to fetch jobs');
        }
    }
    async update(id, updateJobsDto) {
        try {
            const updatedJob = await this.db.jobs.update({
                where: { id },
                data: updateJobsDto,
            });
            return updatedJob;
        }
        catch (error) {
            console.error(`Error updating job with ID ${id}:`, error);
            throw new Error('Failed to update job');
        }
    }
    async getOtherJobs() {
        try {
            const otherJobs = await this.db.jobs.findMany({});
            return otherJobs;
        }
        catch (error) {
            console.error('Error fetching other jobs:', error);
            throw new Error('Failed to fetch other jobs');
        }
    }
};
CareersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], CareersService);
exports.CareersService = CareersService;
//# sourceMappingURL=careers.service.js.map