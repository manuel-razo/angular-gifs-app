import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';


/**
 * Todos los componentes de un módulo deben ser declarados 
 * en el arreglo de declaraciones pero para poder usarlos en
 * la aplicación deben ser nombrados también en el arreglo 
 * de exportaciones. Solo GifsPageComponent se compone a su 
 * vez por BusquedaComponent y ResultadosComponent pero solo
 * GifsPageComponent puede ser usado fuera del módulo local. 
 * BusquedaComponent y ResultadosComponent pueden ser usados 
 * individualmente pero deben ser exportados por separado.
 */
@NgModule({
  declarations: [GifsPageComponent, BusquedaComponent, ResultadosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
