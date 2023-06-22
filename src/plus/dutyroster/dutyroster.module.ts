import { Module } from '@nestjs/common';
import { DutyrosterService } from './dutyroster.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dutyroster } from './entities/dutyroster.entity';

import { DutyrosterController } from './dutyroster.controller';

@Module({
  imports: [SequelizeModule.forFeature([Dutyroster])],
  controllers: [DutyrosterController],
  providers: [DutyrosterService]
})
export class DutyrosterModule {}
