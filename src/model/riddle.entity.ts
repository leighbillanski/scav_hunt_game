import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { QrCode } from './qr-code.entity';
import { Hunt } from './hunt.entity';

@Entity()
export class Riddle {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'RIDDLE_TEXT' })
  riddleText: string;

  @ManyToOne(() => QrCode, (qrCode) => qrCode.id)
  @JoinColumn({ name: 'FK_QR_CODE_ID', referencedColumnName: 'id' })
  qrCode: QrCode;

  @ManyToOne(() => Hunt, (hunt) => hunt.id)
  @JoinColumn({ name: 'FK_HUNT_ID', referencedColumnName: 'id' })
  hunt: Hunt;

  @Column({ name: 'SEQUENCE', type: 'int' })
  sequence: number;
}
