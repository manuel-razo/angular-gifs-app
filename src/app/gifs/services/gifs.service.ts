import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';

/**
 * Injectable es una propiedad que permite al servicio ser utilizado 
 * como tal en la aplicación. Este servicio fue declarado en el arreglo
 * de proveedores en el archivo app.module.ts por lo que para poder ser 
 * utilizado sin volver a llamarlo se debe especificar que fue proporcionado
 * en el módulo principal.
 */
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _apiKey: string = 'tZ8zbXV5MhAmLB6c74YOSBWZBMRsuHbT';
  private _servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    /* if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    } */

    /* if (localStorage.getItem('ultimo-gif')) {
      this.buscarGifs(localStorage.getItem('ultimo-gif')!);
    } */
  }

  /**
   * Las consultas HTTP pueden ser de distintos métodos y se recomienda
   * separar la URL y los parámetros para tener buena legibilidad.
   */
  buscarGifs(query: string = '') {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this._servicioUrl}/search`, { params })
      .subscribe((resp: SearchGifsResponse) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
