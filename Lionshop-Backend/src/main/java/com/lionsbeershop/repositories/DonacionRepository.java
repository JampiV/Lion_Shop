package com.lionsbeershop.repositories;
import com.lionsbeershop.model.Donacion;
import com.lionsbeershop.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface DonacionRepository extends JpaRepository<Donacion, Integer> {
    @Query("SELECT p FROM Donacion p WHERE p.usuario=:usuario")
    List<Donacion> listarDonacionesPorIdUsuario(@Param("usuario") Usuario usuario);

}
