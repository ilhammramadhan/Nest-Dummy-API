import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParcelsModule } from './parcels/parcels.module';
import {SequelizeModule} from '@nestjs/sequelize'
import sequelizeConfig from './config/config';
import { Parcel } from './parcels/entities/parcel.entity';

@Module({
  imports: [
    ParcelsModule,
    SequelizeModule.forRoot({
      ...sequelizeConfig,
      models : [Parcel],
      autoLoadModels : true
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
