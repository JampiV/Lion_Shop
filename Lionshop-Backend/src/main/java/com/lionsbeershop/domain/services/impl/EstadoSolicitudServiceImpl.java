package com.lionsbeershop.domain.services.impl;

import com.lionsbeershop.domain.EstadoSolicitud;
import com.lionsbeershop.infrastracture.EstadoSolicitudRepository;
import com.lionsbeershop.domain.services.EstadoSolicitudService;
import com.lionsbeershop.infrastracture.validators.EstadoSolicitudValidator;
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

