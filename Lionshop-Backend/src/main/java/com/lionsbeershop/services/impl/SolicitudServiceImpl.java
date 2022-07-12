package com.lionsbeershop.services.impl;
import com.lionsbeershop.model.Solicitud;
import com.lionsbeershop.repositories.SolicitudRepository;
import com.lionsbeershop.services.SolicitudService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SolicitudServiceImpl implements SolicitudService {
    private final SolicitudRepository solicitudRepository;

    public SolicitudServiceImpl(SolicitudRepository solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }

    @Override
    public Solicitud crearSolicitud(Solicitud solicitud) {
        return solicitudRepository.save(solicitud);
    }

    @Override
    public List<Solicitud> listarSolicitud() {
        return solicitudRepository.findAll();
    }

    @Override
    public Solicitud modificarSolicitud(Solicitud solicitud) {
        return solicitudRepository.save(solicitud);
    }
    @Override
    public void eliminarSolicitud(Integer idsolicitud) {solicitudRepository.deleteById(idsolicitud);}
}
