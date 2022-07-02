import { Usuario } from "src/app/shared/usuario.model";
import { estadoCompra } from "./estado-compra.model";

export class Compra{
    idCompra: number;
    usuario: Usuario;
    montoPago: number;
    fechaCompra: Date;
    fechaEntrega: Date;
    metodoPago: String;
    estadoCompra: estadoCompra;
    costoEnvio: number;
    subTotal: number;
    donacion: Object;
  }