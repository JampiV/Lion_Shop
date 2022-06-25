package com.lionsbeershop.services.impl;
import com.lionsbeershop.model.EstadoCompra;
import com.lionsbeershop.model.Compra;
import com.lionsbeershop.model.Producto;
import com.lionsbeershop.model.Usuario;
import com.lionsbeershop.repositories.EstadoCompraRepository;
import com.lionsbeershop.repositories.CompraRepository;
import com.lionsbeershop.repositories.ProductoRepository;
import com.lionsbeershop.repositories.UsuarioRepository;
import com.lionsbeershop.services.CompraService;
import com.lionsbeershop.validators.CompraValidator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class CompraServiceImpl implements CompraService{
    private final CompraRepository compraRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private ProductoRepository productoRepository;
    @Autowired
    private EstadoCompraRepository estadoCompraRepository;

    public CompraServiceImpl(CompraRepository compraRepository){
        this.compraRepository=compraRepository;
    }

    @Override
    public Compra pagarCompra(Compra compra) {
        compra.setMontoPago(compra.getCostoEnvio());//idUsuario en funcion a carrito
        Integer idsazo=compra.getUsuario().getIdUsuario();
        Usuario usuarioFinal=usuarioRepository.getById(idsazo);//monto pago
        compra.setMontoPago(obtenerMontoTotal(usuarioFinal, compra));
        //Obtiene el subTotal
        compra.setSubtotal(obtenerSubtotal(compra));
        CompraValidator.validate(compra);
        Set<Producto> nuevaLista = null;
        usuarioFinal.setLista_compra(nuevaLista);
        usuarioRepository.save(usuarioFinal);
        // guarda la compra
        return compraRepository.save(compra);
    }

    @Override
    public float obtenerMontoTotal(Usuario usuario, Compra compra) {
        Set<Producto> productos = usuario.getLista_compra();
        float total=compra.getMontoPago();
        for (Producto producto : productos){
            //Suma de precios
            total+=producto.getCosto_producto();
            productoRepository.save(producto);
        }
        return total;
    }

    @Override
    public float obtenerSubtotal(Compra compra) {
        float subtotal=0f;
        float montoCompleto=compra.getMontoPago();
        float montoEnvio= compra.getCostoEnvio();
        subtotal=montoCompleto-montoEnvio;
        return subtotal;
    }

    @Override
    public Compra modificarCompra(Compra compra) {
        CompraValidator.validate(compra);
        return compraRepository.save(compra);
    }

    @Override
    public void eliminarCompra(Integer idCompra) {
        compraRepository.deleteById(idCompra);
    }

    @Override
    public Compra obtenerCompraPorIdCompra(Integer idCompra) {
        return compraRepository.findById(idCompra).orElse(new Compra());
    }

    @Override
    public List<Compra> listarCompra() {
        return compraRepository.findAll();
    }

    @Override
    public Compra modificarEstadoCompra(Integer idCompra) {
        return null;
    }

    @Override
    public void cancelarCompra(Integer idCompra) {
        Compra compra=compraRepository.findById(idCompra).orElse(new Compra());
        EstadoCompra enviado=estadoCompraRepository.compraEnviado();
        compra.setEstadoCompra(enviado);
    }
    @Override
    public List<Compra> listarComprasPorIdUsuario(Usuario usuario) {
        List<Compra> usuarioId = compraRepository.listarComprasPorIdUsuario(usuario);
        return usuarioId;
    }

}

