import { MainUser } from '../user.entity';
export declare class LoginUserInput implements Partial<MainUser> {
    email: string;
    password: string;
}
