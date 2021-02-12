import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

/**
 * El módulo compartido es creado para componentes que serán 
 * utilizados por toda la aplicción, como los menús y plantillas 
 * HTML base de la aplicación.
 */

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [SidebarComponent]
})
export class SharedModule { }
