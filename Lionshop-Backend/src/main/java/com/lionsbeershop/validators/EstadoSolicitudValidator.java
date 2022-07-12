package com.lionsbeershop.validators;

import com.lionsbeershop.exception.IncorrectResourceRequestException;
import com.lionsbeershop.model.EstadoCompra;
import com.lionsbeershop.model.EstadoSolicitud;

public class EstadoSolicitudValidator {
    public static void validate(EstadoSolicitud estadoSolicitud){
        if (estadoSolicitud.getNombreEstadoS() == null || estadoSolicitud.getNombreEstadoS().trim().isEmpty()){
            throw new IncorrectResourceRequestException("El estado no puede estar vacío.");
        }

        if (estadoSolicitud.getNombreEstadoS().length() < 3){
            throw new IncorrectResourceRequestException("El estado debe ser mayor a 3 caracteres.");
        }

        if (estadoSolicitud.getNombreEstadoS().length() > 50){
            throw new IncorrectResourceRequestException("El estado debe ser menor a 50 caracteres.");
        }
    }
}
