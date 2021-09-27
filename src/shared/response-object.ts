import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ResponseObject {
    @Field({nullable:true})
    data: any[];
    @Field({nullable:true})
    error: any[];
    constructor(data?: any[], error?: any[]) {
        this.data=data;
        this.error=error;
    }
}

// export default function ResponseObject<TItem>(TItemClass: TItem) {
//     // `isAbstract` decorator option is mandatory to prevent registering in schema
//     @ObjectType({ isAbstract: true })
//     abstract class PaginatedResponseClass {
//       // here we use the runtime argument
//       @Field(type => [TItemClass])
//       // and here the generic type
//       items: TItem[];
  
//       @Field(type => Int)
//       total: number;
  
//       @Field()
//       hasMore: boolean;
//     }
//     return PaginatedResponseClass;
// }