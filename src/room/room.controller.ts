import {
  Body,
  Controller,
  Headers,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './room.dto';
import { UserService } from 'src/user/user.service';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from 'src/file/file.service';
import { FileInterceptorMulterOptions } from 'src/file/file.interceptor';

@Controller('/room')
export class RoomController {
  constructor(
    private readonly userService: UserService,
    private readonly roomService: RoomService,
    private readonly fileService: FileService,
  ) {}

  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    const master = this.userService.createUser(createRoomDto.username);
    const room = this.roomService.createRoom(master, createRoomDto.secretKey);
    master.belongRoom = room.id;
    return Object.assign(room, { ownId: master.id });
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', FileInterceptorMulterOptions))
  async uploadPdfFile(
    @UploadedFile()
    file: Express.Multer.File,
    @Headers('user-id') userId: string,
    @Headers('room-id') roomId: string,
  ) {
    console.log(file);
    return 1;
  }
}
