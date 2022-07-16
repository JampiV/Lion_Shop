package com.lionsbeershop.domain.services;

import com.lionsbeershop.domain.EstadoCompra;
import java.util.List;
public interface EstadoCompraService {
    EstadoCompra crearEstado(EstadoCompra estadoCompra);
    EstadoCompra modificarEstado(EstadoCompra estadoCompra);
    void eliminarEstado(Integer idEstado);
    List<EstadoCompra> listarEstado();
    EstadoCompra obtenerEstadoPorIdEstado(Integer idEstado);
}
