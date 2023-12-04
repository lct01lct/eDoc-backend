import {
  WebSocketGateway,
  OnGatewayDisconnect,
  OnGatewayConnection,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway
  implements OnGatewayDisconnect<Socket>, OnGatewayConnection<Socket>
{
  handleConnection(client, ...args: any[]) {
    // console.log(client, args);
  }
  handleDisconnect(client) {
    // console.log(client);
  }

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ) {
    console.log(data);
    client.emit('message', data + 1);
  }
}
