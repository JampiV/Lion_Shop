package com.lionsbeershop.services.impl;

import com.lionsbeershop.model.EstadoSolicitud;
import com.lionsbeershop.repositories.EstadoSolicitudRepository;
import com.lionsbeershop.services.impl.EstadoSolicitudServiceImpl;
import com.lionsbeershop.services.EstadoSolicitudService;
import com.lionsbeershop.validators.EstadoSolicitudValidator;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstadoSolicitudServiceImpl implements EstadoSolicitudService{

    public final EstadoSolicitudRepository estadoSolicitudRepository;

    public EstadoSolicitudServiceImpl(EstadoSolicitudRepository estadoSolicitudRepository){
        this.estadoSolicitudRepository=estadoSolicitudRepository;
    }

    @Override
    public EstadoSolicitud crearEstadoS(EstadoSolicitud estadoSolicitud) {
        EstadoSolicitudValidator.validate(estadoSolicitud);
        return estadoSolicitudRepository.save(estadoSolicitud);
    }

    @Override
    public EstadoSolicitud modificarEstadoS(EstadoSolicitud estadoSolicitud) {
        EstadoSolicitudValidator.validate(estadoSolicitud);
        return estadoSolicitudRepository.save(estadoSolicitud);
    }

    @Override
    public void eliminarEstadoS(Integer idEstadoS) {
        estadoSolicitudRepository.deleteById(idEstadoS);
    }

    @Override
    public List<EstadoSolicitud> listarEstadoS() {
        return estadoSolicitudRepository.findAll();
    }

    @Override
    public EstadoSolicitud obtenerEstadoPorIdEstadoS(Integer idEstadoS) {
        return estadoSolicitudRepository.findById(idEstadoS).orElse(new EstadoSolicitud());
    }
}

