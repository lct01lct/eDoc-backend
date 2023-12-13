import {
  Body,
  Controller,
  FileTypeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './room.dto';
import { UserService } from 'src/user/user.service';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/room')
export class RoomController {
  constructor(
    private readonly userService: UserService,
    private readonly roomService: RoomService,
  ) {}

  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    const master = this.userService.createUser(createRoomDto.username);
    const room = this.roomService.createRoom(master, createRoomDto.secretKey);
    master.belongRoom = room.id;
    return Object.assign(room, { ownId: master.id });
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadPdfFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'application/pdf' })],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file);

    return 1;
  }
}
