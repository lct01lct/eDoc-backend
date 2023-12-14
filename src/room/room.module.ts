import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { UserModule } from 'src/user/user.module';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [UserModule, FileModule],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
