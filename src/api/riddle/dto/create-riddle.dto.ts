import { IsString, IsNumber } from 'class-validator';
import { QrCode } from '../../../model/qr-code.entity';
import { Hunt } from '../../../model/hunt.entity';

export class CreateRiddleDto {
  @IsString()
  riddleText: string;

  qrCode: QrCode;

  hunt: Hunt;

  @IsNumber()
  sequence: number;
}
