import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user.entity';
import { Hunt } from './model/hunt.entity';
import { Riddle } from './model/riddle.entity';
import { QrCode } from './model/qr-code.entity';
import { UserModule } from './api/user/user.module';
import { HuntModule } from './api/hunt/hunt.module';
import { RiddleModule } from './api/riddle/riddle.module';
import { QrCodeModule } from './api/qr-code/qr-code.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'hunt.db',
      entities: [User, Hunt, Riddle, QrCode],
      synchronize: true,
    }),
    UserModule,
    HuntModule,
    RiddleModule,
    QrCodeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
