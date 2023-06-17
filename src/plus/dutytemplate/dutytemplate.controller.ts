import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DutytemplateService } from './dutytemplate.service';
import { CreateDutytemplateDto } from './dto/create-dutytemplate.dto';
import { UpdateDutytemplateDto } from './dto/update-dutytemplate.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Plus')
@Controller('plus/dutytemplate')
export class DutytemplateController {
  constructor(private readonly dutytemplateService: DutytemplateService) {}

  @Post()
  create(@Body() createDutytemplateDto: CreateDutytemplateDto) {
    return this.dutytemplateService.create(createDutytemplateDto);
  }

  @Get()
  findAll(@Query() allParams: any) {
    this.dutytemplateService.rootService()
    return this.dutytemplateService.findAll(allParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.dutytemplateService.rootService()
    return this.dutytemplateService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDutytemplateDto: UpdateDutytemplateDto) {
    return this.dutytemplateService.update(id, updateDutytemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dutytemplateService.remove(id);
  }
}
