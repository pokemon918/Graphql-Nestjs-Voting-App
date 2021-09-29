"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserId = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const my_context_1 = require("../types/my-context");
exports.GetUserId = (0, common_1.createParamDecorator)((data, ctx) => {
    const context = graphql_1.GqlExecutionContext.create(ctx).getContext();
    return context.req.session['userId'];
});
//# sourceMappingURL=getuserid.decorator.js.map