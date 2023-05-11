import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserRequest } from 'src/DTO/Request/CreateUserRequest';
import { IUserService } from 'src/interfaces/IUserService';
import { Account } from 'src/models/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService implements IUserService {
  constructor(@InjectRepository(Account) private readonly userRepository: Repository<Account>) {
    
  }
  async create(createUserRequest: CreateUserRequest): Promise<string> {
    try {
      const account: Account = new Account()
      account.firstName = createUserRequest.firstName
      account.lastName = createUserRequest.lastName
      await this.userRepository.save(account)
      return "executed"
    } catch (error) {
      console.log(error)
    }
  }
  async findAll(): Promise<Account[]> {
    return await this.userRepository.find()
  }
  findOne(): Promise<Account> {
    throw new Error('Method not implemented.');
  }
  remove(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
