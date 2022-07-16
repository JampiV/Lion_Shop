package com.lionsbeershop.domain.services;

import com.lionsbeershop.domain.EstadoSolicitud;

import java.util.List;

public interface EstadoSolicitudService {
    EstadoSolicitud crearEstadoS(EstadoSolicitud estadoSolicitud);
    EstadoSolicitud modificarEstadoS(EstadoSolicitud estadoSolicitud);
    void eliminarEstadoS(Integer idEstadoS);
    List<EstadoSolicitud> listarEstadoS();
    EstadoSolicitud obtenerEstadoPorIdEstadoS(Integer idEstadoS);
}
