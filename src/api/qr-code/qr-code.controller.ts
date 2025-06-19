import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';
import { CreateQrCodeDto } from './dto/create-qr-code.dto';

@Controller('qr')
export class QrCodeController {
  constructor(private userService: QrCodeService) {}
  @Get()
  getAllQrs() {
    return this.userService.getAllQrCodes();
  }

  @Get(':id')
  getHUntById(@Param('id') id: number) {
    return this.userService.getQRById(id);
  }

  @Post()
  createUser(@Body() createHuntDto: CreateQrCodeDto) {
    return this.userService.createQR(createHuntDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteQr(id);
  }
}
