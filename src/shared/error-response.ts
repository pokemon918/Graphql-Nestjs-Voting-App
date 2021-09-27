import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ErrorResponse {
    @Field(() => String ,{nullable:true})
    path: string;
    @Field(() => String, {nullable:true})
    message: string;
}