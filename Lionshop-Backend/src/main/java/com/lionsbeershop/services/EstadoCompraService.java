package com.lionsbeershop.services;

import com.lionsbeershop.model.EstadoCompra;
import java.util.List;
public interface EstadoCompraService {
    EstadoCompra crearEstado(EstadoCompra estadoCompra);
    EstadoCompra modificarEstado(EstadoCompra estadoCompra);
    void eliminarEstado(Integer idEstado);
    List<EstadoCompra> listarEstado();
    EstadoCompra obtenerEstadoPorIdEstado(Integer idEstado);
}
