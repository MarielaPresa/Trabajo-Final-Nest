import { Injectable } from '@nestjs/common';
import { UsuariosModel } from './usuariosModel';

@Injectable()
export class UsuariosService {
    usuarios = [];

    constructor() {
        const usuariosoriginales = [
            { id: '1', nombre: 'Alber', apellido: 'Costa' },
            { id: '2', nombre: 'Feli', apellido: 'Costa' },
            { id: '3', nombre: 'Sebas', apellido : 'Costa' },
            
        ];
        this.usuarios.push(...usuariosoriginales);
    }

    getUsuarios() {
        return this.usuarios;
    }

    postUsuarios(usuario: UsuariosModel) {
        const nuevoUsuario = {
            id: (this.usuarios.length + 1).toString(), 
            name: usuario.nombre,
            surname: usuario.apellido,
        };
        this.usuarios.push(nuevoUsuario);
        return nuevoUsuario;
    }

    getUsuariossbyid(id: string) {
        return this.usuarios.find(usuario => usuario.id === id);
    
    }

    putUsuarios(id: string, actualizarUsuario: UsuariosModel) {
        const index = this.usuarios.findIndex(usuario => usuario.id === id);
        if (index === -1) {
            return { mensaje: 'Usuario no encontrado' };
        }
        this.usuarios[index] = { ...this.usuarios[index], ...actualizarUsuario };
        return { Mensaje: 'Usuario actualizado', usuario: this.usuarios[index] };
        
    }

    deleteUsuarios(id: string) {
        const index = this.usuarios.findIndex(usuario => usuario.id === id);
        if (index === -1) {
            return { Mensaje: 'Usuario no encontrado' };
        }
        const deleted = this.usuarios.splice(index, 1);
        return { Mensaje: 'Usuario eliminado', usuario: deleted[0] };
    }
}
