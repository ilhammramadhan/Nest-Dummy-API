import { PartialType } from '@nestjs/mapped-types';
import { CreateIplmroleDto } from './create-iplmrole.dto';

export class UpdateIplmroleDto extends PartialType(CreateIplmroleDto) {}
