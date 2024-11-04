import { Injectable } from '@nestjs/common';
import { UsuariosModel } from './usuariosModel';

@Injectable()
export class UsuariosService {
    usuarios =[]

    constructor () {
        let usuario = {
            "id": "1",
            "name": "Inolvidable",
            }
        this.usuarios.push(usuario);
            usuario = { 
            "id": "2",
            "name": "La Incondicional",
            }
            this.usuarios.push(usuario);
            usuario = { 
            "id": "3",
            "name": "Hasta que me olvides",
            }
            this.usuarios.push(usuario);
            usuario = { 
                "id": "4",
                "name": "Somos novios",
            }
            this.usuarios.push(usuario);
            
    }
    getUsuarios(){
        return this.usuarios;
    }

    postUsuarios (usuario: UsuariosModel) {
            let newusuario = {
                "id": usuario.id,
                "name": usuario.name,
            }
            this.usuarios.push(usuario)
            return newusuario
    }
    putUsuarios(newusuario:UsuariosModel, id: string): string {
            return 'Put Usuarios';
    }
              
    getUsuariosByName(name:string){
            for(const usuario of this.usuarios)
                if(usuario.name==name)   
                return usuario;
    }

     
    getUsuariosbyid (id:string){
        for(const usuario of this.usuarios)
               if(usuario.id ==id){ 
            return usuario;
        }
    }    
    deleteUsuarios(): string{
        return 'Delete Usuarios';   
    }
            
}





            



