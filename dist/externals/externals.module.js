"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalsModule = void 0;
const common_1 = require("@nestjs/common");
const externals_controller_1 = require("./externals.controller");
const externals_service_1 = require("./externals.service");
const db_service_1 = require("../db/db.service");
let ExternalsModule = class ExternalsModule {
};
ExternalsModule = __decorate([
    (0, common_1.Module)({
        controllers: [externals_controller_1.ExternalsController],
        providers: [externals_service_1.ExternalsService, db_service_1.DbService],
    })
], ExternalsModule);
exports.ExternalsModule = ExternalsModule;
//# sourceMappingURL=externals.module.js.map