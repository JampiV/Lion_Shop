package com.lionsbeershop.services;

import com.lionsbeershop.model.Producto;

import java.util.List;

public interface ProductoService {
    Producto crearProducto(Producto producto);
    Producto seleccionarProducto(Integer IdProducto);
    List<Producto> listarProducto();
    Producto modificarProducto(Producto producto);
    void eliminarProducto(Integer idproducto);
    Long countProductos();
    interface RolService {
    }
}
