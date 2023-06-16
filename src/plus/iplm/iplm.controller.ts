import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IplmService } from './iplm.service';
import { CreateIplmDto } from './dto/create-iplm.dto';
import { UpdateIplmDto } from './dto/update-iplm.dto';

@Controller('iplm')
export class IplmController {
  constructor(private readonly iplmService: IplmService) {}

  @Post()
  create(@Body() createIplmDto: CreateIplmDto) {
    return this.iplmService.create(createIplmDto);
  }

  @Get()
  findAll() {
    return this.iplmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
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
