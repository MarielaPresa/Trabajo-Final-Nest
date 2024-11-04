import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  cliente = []
    //getApp: any;
    constructor () {
    let cliente = {
        "id": 1,
        "name": "Luis",
        "apellido":"Perez",
        "docum": 23777999
            }
        cliente = {
        "id": 1,
        "name": "Jose",
        "apellido":"Lopez",
        "docum": 24999777
                  } 
    }
    getApp(){
      return this.cliente
  }
}
