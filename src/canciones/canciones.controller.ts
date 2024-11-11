import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CancionesModel } from './cancionesModel';

@Controller('canciones')
export class CancionesController {
    constructor(private readonly service: CancionesService) {}

    // Obtener todas las canciones
    @Get()
    getCanciones() {
        return this.service.getCanciones();
    }

    // Crear una nueva canción
    @Post()
    postCanciones(@Body() newCancion: CancionesModel) {
        return this.service.postCanciones(newCancion);
    }

    // Obtener canción por nombre
    @Get('nombre/:nombre')
    getCancionesByNombre(@Param('nombre') nombre: string) {
        const cancion = this.service.getCancionesbynombre(nombre);
        if (!cancion) {
            return { message: `No se encontró ninguna canción con el nombre: ${nombre}` };
        }
        return cancion;
    }

    // Obtener canciones por artista
    @Get('artista/:artista')
    getCancionesByArtista(@Param('artista') artista: string) {
        const canciones = this.service.getCancionesbyartista(artista);
        if (canciones.length === 0) {
            return {Mensaje:`No se encontraron canciones del artista: ${artista}` };
        }
        return canciones;
    }

    // Actualizar una canción por ID
    @Put(':id')
    putCanciones(
        @Param('id') id: string, 
        @Body() actualizarCancion: CancionesModel
    ) {
        const result = this.service.putCanciones(id, actualizarCancion);
        if (result.message === 'Canción no encontrada') {
            return { Mensaje: `No se encontró ninguna canción con el ID: ${id}` };
        }
        return result;
    }
    @Delete(':id')
    deleteCancion(@Param('id') id: string) {
        return this.service.deleteCancion(id);
    }
}