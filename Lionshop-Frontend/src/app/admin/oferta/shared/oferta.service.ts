import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Oferta } from './oferta.model';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient){}

  getAllOfertas() {
    return this.http.get<Oferta[]>(`${this.apiBase}/ofertas`);
  }

  crearOferta(oferta: Oferta) {
    return this.http.post(`${this.apiBase}/ofertas`, oferta);
  }

  verOfertaPorId(id: number){
    return this.http.get(`${this.apiBase}/ofertas/${id}`);
  }

  aplicarOferta(idOferta: number){
    return this.http.put(`${this.apiBase}/ofertas/`, idOferta);
  }

  modidicarOferta(oferta: Oferta){
    return this.http.put(`${this.apiBase}/ofertas`, oferta);
  }
 
}