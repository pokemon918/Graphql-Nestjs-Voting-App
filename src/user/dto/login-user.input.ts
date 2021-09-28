import { InputType, Field } from '@nestjs/graphql';
import { MainUser } from '../user.entity';

@InputType({description: "Login Input"})
export class LoginUserInput implements Partial<MainUser> {

  @Field(() => String, { description: 'email' })
  email: string;

  @Field(() => String, { description: 'password' })
  password: string;

}
