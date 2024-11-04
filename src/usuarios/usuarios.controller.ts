import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosModel } from './usuariosModel';

@Controller('usuarios')
export class UsuariosController {
        constructor(private readonly service: UsuariosService) {} // Mueve el constructor dentro de la clase

    @Get() 
    getUsuarios() {
        return this.service.getUsuarios();
    }    
    @Get("name/:name")
    getUsuariosByName(@Param ("name") name: string) {
        return this.service.getUsuariosByName(name);
    }
    @Get("id/:id")
    getUsuariosbyid(@Param ("id") id: string) {
        return this.service.getUsuariosbyid (id);   
    }
    @Post()
    postUsuarios(@Body()newusuario: UsuariosModel){
        return this.service.postUsuarios(newusuario);
    }
    @Put(':id')
    putUsuarios(@Body() newusuario: UsuariosModel, @Param('id') id: string) { 
        return this.service.putUsuarios(newusuario, id);
    }
    @Delete()
    deleteUsuarios(): string{
        return this.service.deleteUsuarios();
    }
}
