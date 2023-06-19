import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParcelsModule } from './parcels/parcels.module';
import {SequelizeModule} from '@nestjs/sequelize'
import sequelizeConfig from './config/config';
import { Parcel } from './parcels/entities/parcel.entity';
import { IplmModule } from './plus/iplm/iplm.module';
import { IplmroleModule } from './plus/iplmrole/iplmrole.module';
import { DutytemplateModule } from './plus/dutytemplate/dutytemplate.module';
import { DutytypeModule } from './plus/dutytype/dutytype.module';
import { TeamModule } from './plus/team/team.module';
import { TeamroleModule } from './plus/teamrole/teamrole.module';

@Module({
  imports: [
    ParcelsModule,
    SequelizeModule.forRoot({
      ...sequelizeConfig,
      models : [Parcel],
      autoLoadModels : true
    }),
    IplmModule,
    IplmroleModule,
    DutytemplateModule,
    DutytypeModule,
    TeamModule,
    TeamroleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
