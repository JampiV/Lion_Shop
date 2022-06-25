package com.lionsbeershop.services;
import com.lionsbeershop.model.Compra;
import com.lionsbeershop.model.Usuario;

import java.util.List;


public interface CompraService {

    //CRUD
    Compra pagarCompra(Compra compra);
    Compra modificarCompra(Compra compra);
    void eliminarCompra(Integer idCompra);
    Compra obtenerCompraPorIdCompra(Integer idCompra);
    List<Compra> listarCompra();
    List<Compra> listarComprasPorIdUsuario(Usuario usuario);

    //Funcionalities
    Compra modificarEstadoCompra(Integer idCompra);
    void cancelarCompra(Integer idCompra);
    float obtenerMontoTotal(Usuario usuario, Compra compra);
    float obtenerSubtotal(Compra compra);


}
