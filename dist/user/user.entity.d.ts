import { Poll } from 'src/poll/entities/poll.entity';
export declare class MainUser {
    id: string;
    userName: string;
    email: string;
    password: string;
    isActive: boolean;
    pollOptions: Promise<Poll[]>;
}
