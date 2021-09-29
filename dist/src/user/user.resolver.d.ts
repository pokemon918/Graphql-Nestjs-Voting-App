import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    createUser(createUser: CreateUserInput): Promise<({
        userName: string;
        email: string;
        password: string;
        isActive: boolean;
    } & User) | {
        path: string;
        message: string;
    }[]>;
    updateUser(updateUserInput: UpdateUserInput): string;
    removeUser(id: number): string;
}
