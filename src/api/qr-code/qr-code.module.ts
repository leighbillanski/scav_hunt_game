import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QrCodeController } from './qr-code.controller';
import { QrCodeService } from './qr-code.service';
import { QrCode } from '../../model/qr-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QrCode])],
  controllers: [QrCodeController],
  providers: [QrCodeService],
  exports: [QrCodeService],
})
export class QrCodeModule {}
