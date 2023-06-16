import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IplmroleService } from './iplmrole.service';
import { CreateIplmroleDto } from './dto/create-iplmrole.dto';
import { UpdateIplmroleDto } from './dto/update-iplmrole.dto';

@Controller('iplmrole')
export class IplmroleController {
  constructor(private readonly iplmroleService: IplmroleService) {}

  @Post()
  create(@Body() createIplmroleDto: CreateIplmroleDto) {
    return this.iplmroleService.create(createIplmroleDto);
  }

  @Get()
  findAll() {
    return this.iplmroleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iplmroleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIplmroleDto: UpdateIplmroleDto) {
    return this.iplmroleService.update(+id, updateIplmroleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iplmroleService.remove(+id);
  }
}
