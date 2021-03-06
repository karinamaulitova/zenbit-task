import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  findAll() {
    return this.messageRepository.find();
  }

  create(createMessageDto: CreateMessageDto) {
    const message = this.messageRepository.create(createMessageDto);
    return this.messageRepository.save(message);
  }
}
