import { Injectable } from '@nestjs/common';
import { CatEntity } from 'src/models/Cat';

@Injectable()
export class CatService {

  private readonly cats: CatEntity[]

  constructor() {
    this.cats = [
      {
        id: "1",
        name: "Kitty",
        color: "yellow"
      }
    ]
  }

  findAll() {
    return this.cats
  }

  add(cat: CatEntity) {
    this.cats.push(cat)
  }
}
