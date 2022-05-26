package com.lion.controller;

import com.lion.model.Producto;
import com.lion.repositories.ProductoRepository;
import com.lion.services.ProductoService;
import org.springframework.http.ResponseEntity;
import com.lion.WrapperResponse;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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

    @GetMapping("/{ProductId}")
    public ResponseEntity<WrapperResponse<Producto>> SeleccionarProducto(@PathVariable("ProductId") Integer idProducto){
        Producto producto=productoService.seleccionarProducto(idProducto);
        return new WrapperResponse<>(true, "success", producto).createResponse();
    }

    @GetMapping
    public ResponseEntity<WrapperResponse<List<Producto>>> listarProducto(){
        List<Producto> productos=productoService.listarProducto();
        return new WrapperResponse<>(true, "success", productos).createResponse();
    }

}
