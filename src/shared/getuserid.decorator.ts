import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { MyContext } from "src/types/my-context";

export const GetUserId = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const context: MyContext = GqlExecutionContext.create(ctx).getContext();
        return context.req.session['userId'];
    }
);