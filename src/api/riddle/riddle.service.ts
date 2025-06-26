import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateRiddleDto } from './dto/create-riddle.dto';
import { UpdateRiddleDto } from './dto/update-riddle.dto';
import { Riddle } from '../../model/riddle.entity';
import { QrCode } from '../../model/qr-code.entity';

@Injectable()
export class RiddleService {
  constructor(
    @InjectRepository(Riddle)
    private readonly huntRepository: Repository<Riddle>,
    @InjectRepository(QrCode)
    private readonly qrCodeRepository: Repository<QrCode>,
    private readonly dataSource: DataSource,
  ) {}

  getAllRiddlesPerHunt(huntId: number): Promise<Riddle[]> {
    return this.huntRepository.find({
      where: { hunt: { id: huntId } },
      relations: ['hunt'],
    });
  }

  async getRiddleById(id: number): Promise<Riddle> {
    const riddle = await this.huntRepository.findOne({
      where: { id },
      relations: ['qrCode'],
    });
    if (!riddle) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return riddle;
  }

  async createRiddle(createRiddleDto: CreateRiddleDto): Promise<Riddle> {
    return await this.dataSource.transaction(async (manager) => {
      // Save qrCode first
      const qrCode = await manager
        .getRepository(QrCode)
        .save(createRiddleDto.qrCode);
      // Create riddle with saved qrCode
      const newRiddle = manager.getRepository(Riddle).create({
        ...createRiddleDto,
        qrCode,
      });
      return manager.getRepository(Riddle).save(newRiddle);
    });
  }

  async updateRiddle(
    id: number,
    updateRiddleDto: UpdateRiddleDto,
  ): Promise<Riddle> {
    const riddle = await this.getRiddleById(id);
    const updatedRiddle = Object.assign(riddle, updateRiddleDto);
    return this.huntRepository.save(updatedRiddle);
  }

  async deleteRiddle(id: number): Promise<void> {
    const riddle = await this.getRiddleById(id);
    await this.huntRepository.remove(riddle);
  }
}
