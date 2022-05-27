import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiBase:string = environment.apiBase;

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get<Producto[]>(`${this.apiBase}/productos`)
  }

}