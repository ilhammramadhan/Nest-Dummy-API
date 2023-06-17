import { PartialType } from '@nestjs/swagger';
import { CreateDutytemplateDto } from './create-dutytemplate.dto';

export class UpdateDutytemplateDto extends PartialType(CreateDutytemplateDto) {}
