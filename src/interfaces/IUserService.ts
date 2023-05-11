import { CreateUserRequest } from "src/DTO/Request/CreateUserRequest";
import { Account } from "src/models/User";

export interface IUserService {
  findAll(): Promise<Account[]>
  findOne(): Promise<Account | null>
  remove(): Promise<void>
  create(createUserRequest: CreateUserRequest): Promise<string>
}