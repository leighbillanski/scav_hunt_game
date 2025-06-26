import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiddleController } from './riddle.controller';
import { RiddleService } from './riddle.service';
import { Riddle } from '../../model/riddle.entity';
import { QrCode } from '../../model/qr-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Riddle, QrCode])],
  controllers: [RiddleController],
  providers: [RiddleService],
  exports: [RiddleService],
})
export class RiddleModule {}
