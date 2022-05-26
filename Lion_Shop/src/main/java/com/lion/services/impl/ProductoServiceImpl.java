package com.lion.services.impl;

import com.lion.model.Producto;
import com.lion.repositories.ProductoRepository;
import com.lion.services.ProductoService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServiceImpl implements ProductoService {
    private final ProductoRepository productoRepository;

    public ProductoServiceImpl(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    @Override
    public Producto crearProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Producto seleccionarProducto(Integer IdProducto) {
        return productoRepository.findById(IdProducto).orElse(new Producto());
    }
    @Override
    public List<Producto> listarProducto() {
        return productoRepository.findAll();
    }

    @Override
    public Producto modificarProducto(Producto producto) {
        return productoRepository.save(producto);
    }



}
