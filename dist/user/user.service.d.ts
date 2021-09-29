import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { MainUser } from './user.entity';
import { MyContext } from 'src/types/my-context';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<MainUser>);
    create(createUserInput: CreateUserInput): Promise<MainUser | null>;
    findAll(): Promise<MainUser[]>;
    findOne(id: string): Promise<MainUser>;
    update(id: string, updateUserInput: UpdateUserInput): Promise<MainUser>;
    confirmEmail(id: string): Promise<string>;
    remove(id: number): string;
    login(loginInput: LoginUserInput, ctx: MyContext): Promise<string | null>;
    logout(ctx: MyContext): Promise<string | null>;
}
