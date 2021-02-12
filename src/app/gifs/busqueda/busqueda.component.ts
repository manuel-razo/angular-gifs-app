import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  /**
   * ViewChild es una forma de acceder a un elemento HTML cuando se
   * levanta algún evento. Es útil cuando se requiere acceder a las
   * propiedades de este.
   * 
   * Este ViewChild busca un elemento etiquetado como #txtBuscar 
   * pero para uso de la clase se declara también como txtBuscar el
   * cual es de tipo ElementRef<HTMLInputElement> al ser este un 
   * input de HTML.
   */
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  
  constructor(private gifsService: GifsService){}

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
