import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  /**
   * El getter es útil para crear propiedades
   * que necesiten ser inicializados en el momento.
   */
  get historial(){
    return this.gifsServices.historial;
  }
  
  /**
   * 
   * @param gifsServices El constructor carga
   * el servicio como parámetro de forma que 
   * ya no es necesario declararlo junto con
   * las propiedades y pueden ser usados en la
   * clase.
   */
  constructor(private gifsServices: GifsService){}

  buscar(termino: string){
    this.gifsServices.buscarGifs(termino);
  }
}
