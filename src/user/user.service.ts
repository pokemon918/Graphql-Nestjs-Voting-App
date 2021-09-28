import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { GraphQLError } from 'graphql';
import { redis } from '../utils/redis';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { MainUser } from './user.entity';

import * as bcrypt from 'bcryptjs';
import { MyContext } from 'src/types/my-context';
import { sendEmail } from 'src/utils/sendEmail';
import { confirmEmailLink } from 'src/utils/confirmEmailLinks';

@Injectable()
export class UserService {
  constructor(@InjectRepository(MainUser) private usersRepository: Repository<MainUser>) {}

  async create(createUserInput: CreateUserInput): Promise<MainUser | null> {
    const userExists = await this.usersRepository.findOne({where: {email: createUserInput.email}})
    if(userExists) {
       throw new GraphQLError("User Already Exist");
    }
    const user = await this.usersRepository.save({...createUserInput});
    await sendEmail(user.email, await confirmEmailLink(user.id));
    return user;
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: string) {
    return await this.usersRepository.findOne(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const userExists = await this.usersRepository.findOne({where: {email: updateUserInput.email}})
    if(!userExists) {
      throw new GraphQLError("User Not Found");
    }

    this.usersRepository.merge(userExists, updateUserInput);
    return await this.usersRepository.save(userExists);
  }

  async confirmEmail(id: string) {
    const userId = await redis.get(id);
    if(!userId) {
      throw new NotFoundException();
    }

    await this.usersRepository.update({id: userId}, {isActive: true});

    return "Email Successfully Confirmed";
  }

  remove(id: number) {
    
    return `This action removes a #${id} user`;
  }



  async login(loginInput: LoginUserInput, ctx: MyContext): Promise<string |null> {
    const user = await this.usersRepository.findOne({where: {email: loginInput.email}})
    if(!user) {
      throw new GraphQLError("User Not Found By This Email");
    }

    const checkPassword = await bcrypt.compare(loginInput.password, user.password); //user.comparePassword(loginInput.password);
    if(!checkPassword) {
      throw new GraphQLError("Password Incorrect");
    }
    // ctx.res.setHeader('Set-Cookie', `Authentication=${user.id}; HttpOnly; Path=/; Max-Age=${new Date(Date.now() + 1000 * 60 * 60 * 24)}`);
    ctx.req.session['userId'] = user.id;
    ctx.req.session['userRoles'] = ['ADMIN', 'USER'];
    return `Authentication=${user.id}; HttpOnly; Path=/; Max-Age=${new Date(Date.now() + 1000 * 60 * 60 * 24)}`;
  }

  async logout(ctx: MyContext): Promise<string |null> {
    await ctx.req.session.destroy(err => {
      throw new GraphQLError(err);
    });

    ctx.res.clearCookie("votingapp");
    return "Successfully Logout";
  }
}
