import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  private resultadosBusqueda: any[] = [];
  
  constructor() { }

  establecerResultadosBusqueda(resultados: any[]) {
    this.resultadosBusqueda = resultados;
  }

  obtenerResultadosBusqueda(): any[] {
    return this.resultadosBusqueda;
  }
}
