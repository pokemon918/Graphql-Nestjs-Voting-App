import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { description: 'Name' })
  id: string;

  @Field(() => String, { description: 'Name' })
  userName: string;

  @Field(() => String, { description: 'Department' })
  email: string;

  // @Field(() => String, { description: 'password' })
  // password: string;
  
  @Field(() => Boolean, { description: 'active' })
  isActive: boolean;
}
