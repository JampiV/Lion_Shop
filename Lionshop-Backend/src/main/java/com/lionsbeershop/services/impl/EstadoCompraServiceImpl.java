package com.lionsbeershop.services.impl;

import com.lionsbeershop.model.EstadoCompra;
import com.lionsbeershop.repositories.EstadoCompraRepository;
import com.lionsbeershop.services.EstadoCompraService;
import com.lionsbeershop.validators.EstadoCompraValidator;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstadoCompraServiceImpl implements EstadoCompraService {

    public final EstadoCompraRepository estadoCompraRepository;

    public EstadoCompraServiceImpl(EstadoCompraRepository estadoCompraRepository){
        this.estadoCompraRepository=estadoCompraRepository;
    }

    @Override
    public EstadoCompra crearEstado(EstadoCompra estadoCompra) {
        EstadoCompraValidator.validate(estadoCompra);
        return estadoCompraRepository.save(estadoCompra);
    }

    @Override
    public EstadoCompra modificarEstado(EstadoCompra estadoCompra) {
        EstadoCompraValidator.validate(estadoCompra);
        return estadoCompraRepository.save(estadoCompra);
    }

    @Override
    public void eliminarEstado(Integer idEstado) {
        estadoCompraRepository.deleteById(idEstado);
    }

    @Override
    public List<EstadoCompra> listarEstado() {
        return estadoCompraRepository.findAll();
    }

    @Override
    public EstadoCompra obtenerEstadoPorIdEstado(Integer idEstado) {
        return estadoCompraRepository.findById(idEstado).orElse(new EstadoCompra());
    }
}
