import { Body, Controller, Post } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './room.dto';
import { UserService } from 'src/user/user.service';

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
    return room;
  }
}
