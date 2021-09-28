import { ObjectType, Field, Int } from '@nestjs/graphql';
import { MainUser } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PollOption } from './poll-option.entity';

@ObjectType()
@Entity()
export class Poll {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  userId: string;

  @ManyToOne(() => MainUser, {cascade: false})
  user: MainUser;

  @Field(() => [PollOption])
  @OneToMany(() => PollOption, polloption => polloption.poll)
  pollOptions: Promise<PollOption[]>;
}
