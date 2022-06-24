package com.lionsbeershop.repositories;
import com.lionsbeershop.model.Compra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface CompraRepository extends JpaRepository<Compra, Integer> {

}
