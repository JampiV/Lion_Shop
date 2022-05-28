package com.lionsbeershop.services;

import com.lionsbeershop.model.Categoria;

import java.util.List;

public interface CategoriaService {

    Categoria crearCategoria(Categoria categoria);
    List<Categoria> listarCategorias();
    List<Integer> listarIdCategoria();
}
