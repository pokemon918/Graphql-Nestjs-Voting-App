import { Repository } from 'typeorm';
import { CreatePollInput } from './dto/create-poll.input';
import { UpdatePollInput } from './dto/update-poll.input';
import { PollOption } from './entities/poll-option.entity';
import { Poll } from './entities/poll.entity';
export declare class PollService {
    private pollRepository;
    private pollOptionRepository;
    constructor(pollRepository: Repository<Poll>, pollOptionRepository: Repository<PollOption>);
    create(createPollInput: CreatePollInput, userId: string): Promise<Poll>;
    findAll(userId: string): Promise<Poll>;
    findOne(id: string, userId: any): Promise<Poll>;
    update(id: number, updatePollInput: UpdatePollInput): string;
    remove(id: number): string;
}
