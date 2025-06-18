import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Riddle } from './riddle.entity';

@Entity()
export class QrCode {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'QR_CODE_DATA' })
  qrData: string;

  @OneToMany(() => Riddle, (riddle) => riddle.qrCode)
  riddles: Riddle[];
}
