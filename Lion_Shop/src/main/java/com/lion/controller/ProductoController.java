package com.lion.controller;

import com.lion.model.Producto;
import com.lion.services.ProductoService;
import org.springframework.http.ResponseEntity;
import com.lion.WrapperResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/producto")
public class ProductoController {
    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @PostMapping
    public ResponseEntity<WrapperResponse<Producto>>crearProducto(@Valid @RequestBody Producto producto){
        Producto productoNew = productoService.crearProducto(producto);
        return new WrapperResponse<>(true, "message", producto).createResponse();
    }
}
