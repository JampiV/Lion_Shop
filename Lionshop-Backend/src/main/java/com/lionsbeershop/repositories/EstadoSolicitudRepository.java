package com.lionsbeershop.repositories;

import com.lionsbeershop.model.EstadoCompra;
import com.lionsbeershop.model.EstadoSolicitud;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EstadoSolicitudRepository extends JpaRepository<EstadoSolicitud, Integer> {
    @Query("SELECT e FROM EstadoSolicitud e WHERE e.nombreEstadoS = 'Solicitud Cancelada'")
    EstadoSolicitud solicitudCancelado();

    @Query("SELECT e FROM EstadoSolicitud e WHERE e.nombreEstadoS = 'Solicitud Recibida'")
    EstadoSolicitud solicitudEnviado();
}
