import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HuntController } from './hunt.controller';
import { HuntService } from './hunt.service';
import { Hunt } from '../../model/hunt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hunt])],
  controllers: [HuntController],
  providers: [HuntService],
  exports: [HuntService],
})
export class HuntModule {}
