import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GateWayModule } from './gateway/gateway.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [GateWayModule, RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
