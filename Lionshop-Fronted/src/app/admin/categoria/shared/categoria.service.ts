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
    return this.http.get<Categoria[]>(`${this.apiBase}/categorias`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/categorias/${id}`);
  }

  create(categoria: Categoria) {
    return this.http.post(`${this.apiBase}/categorias`, categoria);
  }

  update(categoria: Categoria) {
    return this.http.put(`${this.apiBase}/categorias`, categoria);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/categorias/${id}`);
  }
}