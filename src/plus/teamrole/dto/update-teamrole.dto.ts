import { PartialType } from '@nestjs/swagger';
import { CreateTeamroleDto } from './create-teamrole.dto';

export class UpdateTeamroleDto extends PartialType(CreateTeamroleDto) {}
