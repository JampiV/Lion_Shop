import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllCategorias() {
    return this.http.get<Categoria[]>(`${this.apiBase}/categoria`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/categoria/${id}`);
  }

  create(categoria: Categoria) {
    return this.http.post(`${this.apiBase}/categoria`, categoria);
  }

  update(categoria: Categoria) {
    return this.http.put(`${this.apiBase}/categoria`, categoria);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/categoria/${id}`);
  }
}