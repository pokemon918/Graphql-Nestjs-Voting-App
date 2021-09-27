import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePollInput {
  
  @Field(() => String)
  name: string;

  @Field(() => [String])
  options: string[];

}
