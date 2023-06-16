import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { IplmroleService } from './iplmrole.service';
import { CreateIplmroleDto } from './dto/create-iplmrole.dto';
import { UpdateIplmroleDto } from './dto/update-iplmrole.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Plus')
@Controller('plus/iplmrole')
export class IplmroleController {
  constructor(private readonly iplmroleService: IplmroleService) {}

  @Post()
  create(@Body() createIplmroleDto: CreateIplmroleDto) {
    return this.iplmroleService.create(createIplmroleDto);
  }

  @Get()
  findAll(@Query() allParams: any) {
    this.iplmroleService.rootService()
    return this.iplmroleService.findAll(allParams);
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    this.iplmroleService.rootService()
    return this.iplmroleService.findOne(code);
  }

  @Patch(':code')
  update(@Param('code') code: string, @Body() updateIplmroleDto: UpdateIplmroleDto) {
    return this.iplmroleService.update(code, updateIplmroleDto);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.iplmroleService.remove(code);
  }
}
