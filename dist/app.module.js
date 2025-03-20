"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const post_module_1 = require("./post/post.module");
const db_module_1 = require("./db/db.module");
const common_1 = require("@nestjs/common");
const tags_module_1 = require("./tags/tags.module");
const careers_module_1 = require("./careers/careers.module");
const category_module_1 = require("./category/category.module");
const db_service_1 = require("./db/db.service");
const externals_controller_1 = require("./externals/externals.controller");
const externals_service_1 = require("./externals/externals.service");
const externals_module_1 = require("./externals/externals.module");
const subscriber_module_1 = require("./subscriber/subscriber.module");
const comment_module_1 = require("./comment/comment.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [post_module_1.PostModule, db_module_1.DbModule, tags_module_1.TagsModule, careers_module_1.CareersModule, category_module_1.CategoryModule, externals_module_1.ExternalsModule, subscriber_module_1.SubscriberModule, comment_module_1.CommentModule],
        controllers: [externals_controller_1.ExternalsController],
        providers: [externals_service_1.ExternalsService, db_service_1.DbService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map