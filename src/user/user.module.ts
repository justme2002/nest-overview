import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/models/User';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  exports: [TypeOrmModule]
})
export class UserModule {}
