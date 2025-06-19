import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQrCodeDto } from './dto/create-qr-code.dto';
import { QrCode } from '../../model/qr-code.entity';

@Injectable()
export class QrCodeService {
  constructor(
    @InjectRepository(QrCode)
    private readonly huntRepository: Repository<QrCode>,
  ) {}

  getAllQrCodes(): Promise<QrCode[]> {
    return this.huntRepository.find();
  }
  async getQRById(id: number): Promise<QrCode> {
    const qr = await this.huntRepository.findOne({ where: { id } });
    if (!qr) {
      throw new NotFoundException(`QR with ID ${id} not found`);
    }
    return qr;
  }

  async createQR(createQrDto: CreateQrCodeDto): Promise<QrCode> {
    const newQr = this.huntRepository.create(createQrDto);
    return this.huntRepository.save(newQr);
  }

  async deleteQr(id: number): Promise<void> {
    const qr = await this.getQRById(id);
    await this.huntRepository.remove(qr);
  }
}
