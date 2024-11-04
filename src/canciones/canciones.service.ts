import { Injectable } from '@nestjs/common';
import { CancionesModel } from './CancionesModel';

@Injectable()
export class CancionesService {
    canciones =[]

    constructor () {
        let cancion = {
            "id": "1",
            "name": "Inolvidable",
            "genero": "balada",
            "artista":"Luis Miguel" 
            }
        this.canciones.push(cancion);
            cancion = { 
            "id": "2",
            "name": "La Incondicional",
            "genero": "balada",
            "artista":"Luis Miguel" 
            }
            this.canciones.push(cancion);
            cancion = { 
            "id": "3",
            "name": "Hasta que me olvides",
            "genero": "balada",
            "artista":"Luis Miguel" 
            }
            this.canciones.push(cancion);
            cancion = { 
                "id": "4",
                "name": "Somos novios",
                "genero": "bolero",
                "artista":"Luis Miguel" 
            }
            this.canciones.push(cancion);
            cancion = { 
                    "id":"5",
                    "name": "Pajaro cantor",
                    "genero": "folcklore",
                    "artista":"Abel Pintos" 
            }
            this.canciones.push(cancion);
            
        }
    getCanciones(){
            return this.canciones
        }
    postCanciones (cancion: CancionesModel) {
            let newcancion = {
                "id": cancion.id,
                "name": cancion.name,
                "genero": cancion.genero,
                "artista": cancion.artista,
            }
            this.canciones.push(cancion)
            return newcancion
        }
    
    putCanciones(id: string, updatedCancion: CancionesModel) {
            const index = this.canciones.findIndex(cancion => cancion.id === id);
            if (index === -1) {
                return { message: 'Canción no encontrada' };
            }
            this.canciones[index] = { ...this.canciones[index], ...updatedCancion };
            return { Mensaje: 'Canción actualizada', cancion: this.canciones[index] };
            
        } 
        

    
    getCancionesByName(name: string){
            for (const cancion of  this.canciones) 
                    if (cancion.name == name) {
                    return cancion;
            
            }
    }

   
getCancionesbyartista (artista: string){            
             for (const cancion of  this.canciones) 
                    if (cancion.artista == artista) {
                    return cancion;
                    
                }
}

    deleteCanciones():string{
            return'Delete Canciones';
}







}



