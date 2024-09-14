import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5000';


  initSocket(){
    const socket = io( this.apiUrl , { transports : ['websocket'] });
    console.log(socket);
    this.onInit(socket);
    return socket;
  }

  onInit(socket:any){
    socket.on("connect", () =>{
      console.log(`You connected with id: ${socket.id}`)
    })
  }

}
