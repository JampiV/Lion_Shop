package com.lionsbeershop.domain.services;

import com.lionsbeershop.domain.Categoria;

import java.util.List;

public interface CategoriaService {

    Categoria crearCategoria(Categoria categoria);
    List<Categoria> listarCategorias();
    List<Integer> listarIdCategoria();
}
