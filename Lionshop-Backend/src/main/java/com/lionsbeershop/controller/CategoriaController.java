package com.lionsbeershop.controller;

import com.lionsbeershop.WrapperResponse;
import com.lionsbeershop.model.Categoria;
import com.lionsbeershop.services.CategoriaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    private final CategoriaService categoriaService;

    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @PostMapping
    public ResponseEntity<WrapperResponse<Categoria>>crearCategoria(@Valid @RequestBody Categoria categoria){
        Categoria categoria1 = categoriaService.crearCategoria(categoria);
        return new WrapperResponse<>(true, "message", categoria1).createResponse();
    }

    @GetMapping
    public ResponseEntity<WrapperResponse<List<Categoria>>>listarCategorias(){
        List<Categoria> categoriaList=categoriaService.listarCategorias();
        return new WrapperResponse<>(true, "success",
                categoriaList).createResponse();
    }

}
