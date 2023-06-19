import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TeamroleService } from './teamrole.service';
import { CreateTeamroleDto } from './dto/create-teamrole.dto';
import { UpdateTeamroleDto } from './dto/update-teamrole.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Plus')
@Controller('plus/teamrole')
export class TeamroleController {
  constructor(private readonly teamroleService: TeamroleService) {}

  @Post()
  create(@Body() createTeamroleDto: CreateTeamroleDto) {
    return this.teamroleService.create(createTeamroleDto);
  }

  @Get()
  findAll(@Query() allParams: any) {
    this.teamroleService.rootService()
    return this.teamroleService.findAll(allParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.teamroleService.rootService()
    return this.teamroleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamroleDto: UpdateTeamroleDto) {
    return this.teamroleService.update(id, updateTeamroleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamroleService.remove(id);
  }
}
