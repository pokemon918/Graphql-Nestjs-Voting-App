import { InputType, Field } from '@nestjs/graphql';
import { User } from '../user.entity';

@InputType({description: "Login Input"})
export class LoginUserInput implements Partial<User> {

  @Field(() => String, { description: 'email' })
  email: string;

  @Field(() => String, { description: 'password' })
  password: string;

}
