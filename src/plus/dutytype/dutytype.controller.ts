import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DutytypeService } from './dutytype.service';
import { CreateDutytypeDto } from './dto/create-dutytype.dto';
import { UpdateDutytypeDto } from './dto/update-dutytype.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Plus')
@Controller('plus/dutytype')
export class DutytypeController {
  constructor(private readonly dutytypeService: DutytypeService) {}

  @Post()
  create(@Body() createDutytypeDto: CreateDutytypeDto) {
    return this.dutytypeService.create(createDutytypeDto);
  }

  @Get()
  findAll(@Query() allParams: any) {
    this.dutytypeService.rootService()
    return this.dutytypeService.findAll(allParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.dutytypeService.rootService()
    return this.dutytypeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDutytypeDto: UpdateDutytypeDto) {
    return this.dutytypeService.update(id, updateDutytypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dutytypeService.remove(id);
  }
}
