import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Donacion } from "./donacion.model";

@Injectable({
  providedIn: 'root'
})
export class DonacionService {
  private apiBase: string= environment.apiBase;

  constructor(private http: HttpClient) {}

  crearDonacion(donacion: Donacion){
    return this.http.post(`${this.apiBase}/donaciones`, donacion)
  }
}
