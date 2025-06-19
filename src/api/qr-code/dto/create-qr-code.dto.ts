import { IsString } from 'class-validator';

export class CreateQrCodeDto {
  @IsString()
  qrData: string;
}
