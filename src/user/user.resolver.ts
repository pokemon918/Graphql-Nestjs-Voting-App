import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { MyContext } from 'src/types/my-context';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/auth.guard';


@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}


  @Query(() => [User], { name: 'users' })
  @UseGuards(AuthGuard)
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.userService.findOne(id);
  }


  @Mutation(() => User, { nullable: true})
  createUser(@Args('createUser') createUser: CreateUserInput): Promise<User | null > {
    return this.userService.create(createUser);
  }

  @Mutation(() => User, { nullable: true})
  updateUser(@Args('updateUser') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }

  @Mutation(() => String, { nullable: true}) 
  loginUser(@Args('loginInput') loginInput: LoginUserInput, @Context() ctx: MyContext) {
    return this.userService.login(loginInput, ctx);
  }

  @Mutation(() => String, { nullable: true}) 
  logout(@Context() ctx: MyContext) {
    return this.userService.logout(ctx);
  }
}
