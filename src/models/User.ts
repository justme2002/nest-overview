import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({
    default: true
  })
  isActive: boolean
}