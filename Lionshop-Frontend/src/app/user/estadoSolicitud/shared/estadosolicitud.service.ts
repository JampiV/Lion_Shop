import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EstadoSolicitud } from './estadosolicitud.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoSolicitudService {

private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllEstadoSolicitudes(){
    return this.http.get<EstadoSolicitud[]>(`${this.apiBase}/estadosolicitud`);
  }

  getAllIdsEstados() {
    return this.http.get<number[]>(`${this.apiBase}/estadosolicitud/ides`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/estadosolicitud/${id}`);
  }

  create(estadoSolicitud: EstadoSolicitud) {
    return this.http.post(`${this.apiBase}/estadosolicitud`, EstadoSolicitud);
  }

  update(estadoSolicitud: EstadoSolicitud) {
    return this.http.put(`${this.apiBase}/estadosolicitud`, EstadoSolicitud);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/estadosolicitud/${id}`);
  }
}