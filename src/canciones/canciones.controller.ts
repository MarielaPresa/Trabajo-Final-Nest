import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CancionesModel } from './CancionesModel';

@Controller('canciones')
export class CancionesController {
        constructor(private readonly service: CancionesService) {} // Mueve el constructor dentro de la clase

    @Get() 
    getCanciones() {
        return this.service.getCanciones();
    }
    @Get("name/:name")
    getCancionesByName(@Param ("name") name: string) {
        return this.service.getCancionesByName(name);
    }
    @Get("artista/:id")
    getCancionesbyartista(@Param ("artista") artista: string) {
        return this.service.getCancionesbyartista (artista)
    }
    @Post()
    postCanciones(@Body()newcancion: CancionesModel){
        return this.service.postCanciones(newcancion);
    }
    
    @Put(':id')
    putCanciones(@Body() newcancion: CancionesModel, @Param('id') id: string) {
        return this.service.putCanciones(id, newcancion);
    }
    
    
    @Delete()
    deleteCanciones(): string {
        return this.service.deleteCanciones();
    }

}





