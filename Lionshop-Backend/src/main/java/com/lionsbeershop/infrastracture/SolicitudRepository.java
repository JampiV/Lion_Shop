package com.lionsbeershop.infrastracture;

import com.lionsbeershop.domain.Solicitud;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SolicitudRepository extends JpaRepository<Solicitud, Integer> {
}
