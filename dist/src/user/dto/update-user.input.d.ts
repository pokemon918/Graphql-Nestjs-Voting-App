import { CreateUserInput } from './create-user.input';
declare const UpdateUserInput_base: import("@nestjs/common").Type<Partial<CreateUserInput>>;
export declare class UpdateUserInput extends UpdateUserInput_base {
    id: number;
    userName: string;
    email: string;
    password: string;
    isActive: boolean;
}
export {};
