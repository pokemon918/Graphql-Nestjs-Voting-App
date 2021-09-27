import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PollService } from './poll.service';
import { Poll } from './entities/poll.entity';
import { CreatePollInput } from './dto/create-poll.input';
import { UpdatePollInput } from './dto/update-poll.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/auth.guard';
import { GetUserId } from 'src/shared/getuserid.decorator';

@Resolver(() => Poll)
export class PollResolver {
  constructor(private readonly pollService: PollService) {}

  @Mutation(() => Poll, {nullable: true})
  @UseGuards(AuthGuard)
  createPoll(@Args('createPollInput') createPollInput: CreatePollInput, @GetUserId() userId: string): Promise<Poll> {
    return this.pollService.create(createPollInput, userId);
  }

  @Query(() => [Poll], { name: 'poll' })
  findAll( @GetUserId() userId: string) {
    return this.pollService.findAll(userId);
  }

  @Query(() => Poll, { name: 'poll' })
  @UseGuards(AuthGuard)
  findOne(@Args('id', { type: () => String }) id: string, @GetUserId() userId: string) {
    return this.pollService.findOne(id, userId);
  }

  @Mutation(() => Poll)
  updatePoll(@Args('updatePollInput') updatePollInput: UpdatePollInput) {
    return this.pollService.update(updatePollInput.id, updatePollInput);
  }

  @Mutation(() => Poll)
  removePoll(@Args('id', { type: () => Int }) id: number) {
    return this.pollService.remove(id);
  }
}
