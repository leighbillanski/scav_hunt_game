import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QrCodeController } from './qr-code.controller';
import { QrCodeService } from './qr-code.service';
import { Riddle } from '../../model/riddle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Riddle])],
  controllers: [QrCodeController],
  providers: [QrCodeService],
  exports: [QrCodeService],
})
export class QrCodeModule {}
