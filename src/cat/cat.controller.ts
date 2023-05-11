import { Body, Controller, Get, Header, Param, Post, Query, Res } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatEntity } from 'src/models/Cat';
import { CreateCatRequest } from 'src/DTO/Request/createCatRequest';
import { query } from 'express';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getCats(@Query() query): CatEntity[] {
    console.log({ query })
    return this.catService.findAll()
  }

  @Get(":id")
  getCat(@Param("id") id: string): string {
    return id
  }



  @Post()
  create(@Body() createCatRequest: CreateCatRequest) {
    const cat: CatEntity = new CatEntity()
    cat.id = Math.floor(Math.random() * 1000).toString()
    cat.name = createCatRequest.name
    cat.color = createCatRequest.color

    return cat
  }
}
