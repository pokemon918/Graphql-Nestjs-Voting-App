import { PollService } from './poll.service';
import { Poll } from './entities/poll.entity';
import { CreatePollInput } from './dto/create-poll.input';
import { UpdatePollInput } from './dto/update-poll.input';
export declare class PollResolver {
    private readonly pollService;
    constructor(pollService: PollService);
    createPoll(createPollInput: CreatePollInput, userId: string): Promise<Poll>;
    findAll(userId: string): Promise<Poll>;
    findOne(id: string, userId: string): Promise<Poll>;
    updatePoll(updatePollInput: UpdatePollInput): string;
    removePoll(id: number): string;
}
