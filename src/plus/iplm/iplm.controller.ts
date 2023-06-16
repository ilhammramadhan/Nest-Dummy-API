import { Iplmrole } from './../iplmrole/entities/iplmrole.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { IplmService } from './iplm.service';
import { CreateIplmDto } from './dto/create-iplm.dto';
import { UpdateIplmDto } from './dto/update-iplm.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Plus')
@Controller('plus/iplm')
export class IplmController {
  constructor(private readonly iplmService: IplmService) {}

  @Post()
  create(@Body() createIplmDto: CreateIplmDto) {
    return this.iplmService.create(createIplmDto);
  }

  @Get()
  findAll(@Query() allParams: any) {
    this.iplmService.rootService();
    return this.iplmService.findAll(allParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.iplmService.rootService();
    return this.iplmService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIplmDto: UpdateIplmDto) {
    return this.iplmService.update(id, updateIplmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iplmService.remove(id);
  }
}
