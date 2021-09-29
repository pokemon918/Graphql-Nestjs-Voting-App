import { Poll } from './poll.entity';
export declare class PollOption {
    id: string;
    text: string;
    vote: number;
    pollId: string;
    poll: Promise<Poll>;
}
