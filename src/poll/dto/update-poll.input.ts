import { CreatePollInput } from './create-poll.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePollInput extends PartialType(CreatePollInput) {
  @Field(() => Int)
  id: number;
}
