import { Module } from '@nestjs/common';
import { PollService } from './poll.service';
import { PollResolver } from './poll.resolver';
import { Poll } from './entities/poll.entity';
import { PollOption } from './entities/poll-option.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Poll, PollOption])
  ],
  exports: [
    TypeOrmModule
  ],
  providers: [PollResolver, PollService]
})
export class PollModule {}
