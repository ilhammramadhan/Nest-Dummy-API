import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DutyrosterService } from './dutyroster.service';
import { CreateDutyrosterDto } from './dto/create-dutyroster.dto';
import { UpdateDutyrosterDto } from './dto/update-dutyroster.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Plus')
@Controller('plus/dutyroster')
export class DutyrosterController {
  constructor(private readonly dutyrosterService: DutyrosterService) {}

  @Post()
  create(@Body() createDutyrosterDto: CreateDutyrosterDto) {
    return this.dutyrosterService.create(createDutyrosterDto);
  }

  @Get()
  findAll(@Query() allParams: any) {
    this.dutyrosterService.rootService()
    return this.dutyrosterService.findAll(allParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.dutyrosterService.rootService()
    return this.dutyrosterService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDutyrosterDto: UpdateDutyrosterDto) {
    return this.dutyrosterService.update(id, updateDutyrosterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dutyrosterService.remove(id);
  }
}
