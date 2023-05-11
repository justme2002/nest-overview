import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequest } from 'src/DTO/Request/CreateUserRequest';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserRequest: CreateUserRequest) {
    const result = this.userService.create(createUserRequest)
    return result
  }
}
