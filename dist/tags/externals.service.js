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
exports.ExternalsService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let ExternalsService = class ExternalsService {
    constructor(db) {
        this.db = db;
    }
    async search(query) {
        const posts = await this.db.post.findMany({
            where: {
                OR: [
                    { title: { contains: query, mode: 'insensitive' } },
                    { text: { contains: query, mode: 'insensitive' } },
                    { author: { contains: query, mode: 'insensitive' } },
                ],
            },
        });
        if (posts.length === 0) {
            return null;
        }
        else if (posts.length === 1) {
            return posts[0];
        }
        else {
            return posts;
        }
    }
    async stats() {
        const result = await this.db.post.groupBy({
            by: ['category'],
            _count: {
                id: true,
            },
        });
        return result.map((group) => ({
            category: group.category,
            count: group._count.id,
        }));
    }
};
ExternalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], ExternalsService);
exports.ExternalsService = ExternalsService;
//# sourceMappingURL=externals.service.js.map