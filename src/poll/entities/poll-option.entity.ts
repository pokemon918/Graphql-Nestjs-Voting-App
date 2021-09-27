import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Poll } from './poll.entity';

@ObjectType()
@Entity()
export class PollOption {
    @Field(() => String)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => String)
    @Column()
    text: string;

    @Field(() => Int)
    @Column()
    vote: number;

    @Field(() => String)
    @Column()
    pollId: string;

    @Field(() => Poll)
    @ManyToOne(() => Poll, poll => poll.pollOptions)
    poll: Promise<Poll>;
}
