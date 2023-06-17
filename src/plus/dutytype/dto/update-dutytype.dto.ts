import { PartialType } from '@nestjs/swagger';
import { CreateDutytypeDto } from './create-dutytype.dto';

export class UpdateDutytypeDto extends PartialType(CreateDutytypeDto) {}
