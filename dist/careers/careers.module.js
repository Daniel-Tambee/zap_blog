"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareersModule = void 0;
const common_1 = require("@nestjs/common");
const careers_service_1 = require("./careers.service");
const careers_controller_1 = require("./careers.controller");
const db_service_1 = require("../db/db.service");
let CareersModule = class CareersModule {
};
CareersModule = __decorate([
    (0, common_1.Module)({
        controllers: [careers_controller_1.CareersController],
        providers: [careers_service_1.CareersService, db_service_1.DbService],
    })
], CareersModule);
exports.CareersModule = CareersModule;
//# sourceMappingURL=careers.module.js.map