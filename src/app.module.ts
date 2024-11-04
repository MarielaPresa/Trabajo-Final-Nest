import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CancionesController } from './canciones/canciones.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { CancionesService } from './canciones/canciones.service';
import { UsuariosService } from './usuarios/usuarios.service';

@Module({
  imports: [],
  controllers: [AppController, CancionesController, UsuariosController],
  providers: [AppService, CancionesService, UsuariosService],
})
export class AppModule {}
