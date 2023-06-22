import { PartialType } from '@nestjs/swagger';
import { CreateDutyrosterDto } from './create-dutyroster.dto';

export class UpdateDutyrosterDto extends PartialType(CreateDutyrosterDto) {}
