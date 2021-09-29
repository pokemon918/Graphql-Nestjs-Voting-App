"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeOrmConfig_1 = require("./config/typeOrmConfig");
const auth_guard_1 = require("./shared/auth.guard");
const user_module_1 = require("./user/user.module");
const poll_module_1 = require("./poll/poll.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeOrmConfig_1.typeOrmProdConfig),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                playground: true,
                sortSchema: true,
                formatError: (error) => {
                    var _a, _b, _c, _d, _e, _f;
                    const graphQLFormattedError = {
                        message: error.message || ((_c = (_b = (_a = error.extensions) === null || _a === void 0 ? void 0 : _a.exception) === null || _b === void 0 ? void 0 : _b.response) === null || _c === void 0 ? void 0 : _c.message),
                        code: ((_d = error.extensions) === null || _d === void 0 ? void 0 : _d.code) || "SERVER_ERROR",
                        name: ((_f = (_e = error.extensions) === null || _e === void 0 ? void 0 : _e.exception) === null || _f === void 0 ? void 0 : _f.name) || error.name,
                    };
                    return graphQLFormattedError;
                },
                context: ({ req, res }) => ({ req, res })
            }),
            user_module_1.UserModule,
            poll_module_1.PollModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, auth_guard_1.AuthGuard],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map