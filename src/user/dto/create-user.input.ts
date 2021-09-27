import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field(() => String, { description: 'Name' })
  userName: string;

  @Field(() => String, { description: 'Department' })
  email: string;

  @Field(() => String, { description: 'password' })
  password: string;
  
  // @Field(() => Boolean, { description: 'active' })
  // isActive: boolean;
}
