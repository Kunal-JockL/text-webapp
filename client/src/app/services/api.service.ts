import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from "socket.io-client";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private router: Router){}

  private apiUrl = 'http://localhost:5000';
  private room = '';


  initSocket( userName: string){
    const socket = io( this.apiUrl , { transports : ['websocket'] });
    console.log(socket);
    this.logUser(socket, userName);
    this.getPresence(socket);
    this.getEnterRoom(socket);
    return socket;
  }

  logUser(socket:any, userName: string){
    socket.on("connect", () =>{
      console.log(`You connected with id: ${socket.id} as user ${userName}`);
      socket.emit('send-user', userName);
    })
  }

  getPresence(socket:any){
    socket.on('aknowledge', (userName: string) => {
      console.log(userName)
    })
  }

  getEnterRoom(socket:any){
    socket.on('paired', (outputString: string , room: string) => {
      this.router.navigate(['/main']);
      this.room = room;
      console.log(outputString);
    })
  }
}
