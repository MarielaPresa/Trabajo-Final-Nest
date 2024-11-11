import { Injectable } from '@nestjs/common';
import { CancionesModel } from './cancionesModel';
@Injectable()
export class CancionesService {
    canciones = [];

    constructor() {
        const cancionesOriginales = [
            { id: '1', nombre: 'Toto', artista: 'Cacho' },
            { id: '2', nombre: 'Pepe', artista: 'Juancho' },
            { id: '3', nombre:'Quique', artista: 'Pepito' },
            { id: '4', nombre: 'Pepe', artista: 'Lucho' },
            { id: '5', nombre: 'Moncho', artista: 'Rodolfo' },
            
        ];
        this.canciones.push(...cancionesOriginales);
    }

    getCanciones() {
        return this.canciones;
    }

    postCanciones(cancion: CancionesModel) {
        const newCancion = {
            id: (this.canciones.length + 1).toString(), // Genera un ID único.
            name: cancion.nombre,
            artist: cancion.artista,
        };
        this.canciones.push(newCancion);
        return newCancion;
    }

    getCancionesbynombre(nombre: string) {
        return this.canciones.find(cancion => cancion.nombre === nombre);
    }

    getCancionesbyartista(artista: string) {
        return this.canciones.filter(cancion => cancion.artista === artista);
    }
    putCanciones(id: string, actualizarCancion: CancionesModel) {
        const index = this.canciones.findIndex(cancion => cancion.id === id);
        if (index === -1) {
            return { message: 'Canción no encontrada' };
        }
    
        const { nombre, artista } = actualizarCancion;
        if (!nombre || !artista) {
            return { message: 'El nombre y el artista son obligatorios' };
        }
    
        // Crear una nueva canción con los datos actualizados
        const nuevaCancion = {
            id,
            nombre,
            artista,
        };
    
        // Reemplazar la canción original con la nueva
        this.canciones[index] = nuevaCancion;
        
        return { message: 'Canción actualizada', cancion: nuevaCancion };
    }
    
    

    deleteCancion(id: string) {
        const index = this.canciones.findIndex(cancion => cancion.id === id);
        if (index === -1) {
            return { message: 'Canción no encontrada' };
        }
        const deleted = this.canciones.splice(index, 1);
        return { Mensaje: 'Canción eliminada', cancion: deleted[0] };
    }
}


