import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  exports: [TypeOrmModule],
  providers: [UserResolver, UserService],
  controllers: [UserController]
})
export class UserModule {}
