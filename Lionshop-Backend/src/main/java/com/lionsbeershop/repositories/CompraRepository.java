package com.lionsbeershop.repositories;
import com.lionsbeershop.model.Compra;
import com.lionsbeershop.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface CompraRepository extends JpaRepository<Compra, Integer> {
    @Query("SELECT p FROM Compra p WHERE p.usuario=:usuario")
    List<Compra> listarComprasPorIdUsuario(@Param("usuario") Usuario usuario);

}
