import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePollInput } from './dto/create-poll.input';
import { UpdatePollInput } from './dto/update-poll.input';
import { PollOption } from './entities/poll-option.entity';
import { Poll } from './entities/poll.entity';

@Injectable()
export class PollService {


  constructor(@InjectRepository(Poll) private pollRepository: Repository<Poll>,
  @InjectRepository(PollOption) private pollOptionRepository: Repository<PollOption>){}

  async create(createPollInput: CreatePollInput, userId: string): Promise<Poll> {
    const poll = await this.pollRepository.save({name: createPollInput.name, userId});

    createPollInput.options.map( async text => {
      await this.pollOptionRepository.save({
        text,
        vote: 0,
        pollId: poll.id
      });
    });

    return await this.pollRepository.findOne({where: {id: poll.id}, relations: ['pollOptions']});
  }

  async findAll(userId: string) {
    return await this.pollRepository.findOne({where: {userId: userId}, relations: ['pollOptions']});
  }

  async findOne(id: string, userId) {
    return await this.pollRepository.findOne({where: {id: id, userId: userId}, relations: ['pollOptions']});
  }

  update(id: number, updatePollInput: UpdatePollInput) {
    return `This action updates a #${id} poll`;
  }

  remove(id: number) {
    return `This action removes a #${id} poll`;
  }
}
