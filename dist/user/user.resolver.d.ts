import { UserService } from './user.service';
import { MainUser } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { MyContext } from 'src/types/my-context';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<MainUser[]>;
    findOne(id: string): Promise<MainUser>;
    createUser(createUser: CreateUserInput): Promise<MainUser | null>;
    updateUser(updateUserInput: UpdateUserInput): Promise<MainUser>;
    removeUser(id: number): string;
    loginUser(loginInput: LoginUserInput, ctx: MyContext): Promise<string>;
    logout(ctx: MyContext): Promise<string>;
}
