import { MainUser } from 'src/user/user.entity';
import { PollOption } from './poll-option.entity';
export declare class Poll {
    id: string;
    name: string;
    userId: string;
    user: MainUser;
    pollOptions: Promise<PollOption[]>;
}
