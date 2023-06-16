import { PartialType } from '@nestjs/mapped-types';
import { CreateIplmDto } from './create-iplm.dto';

export class UpdateIplmDto extends PartialType(CreateIplmDto) {}
