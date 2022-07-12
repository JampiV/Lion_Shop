import { Usuario } from "src/app/shared/usuario.model";
import { estadoSolicitud } from "./estado-solicitud.model";

export class Solicitud {
    idSolicitud: number;
    idDonacion: number;
    usuario : any;
    nomnre_solicitud: string;
    distrito: string;
    estadoSolicitud : estadoSolicitud;
  }
  