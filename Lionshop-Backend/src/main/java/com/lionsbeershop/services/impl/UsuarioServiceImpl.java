package com.lionsbeershop.services.impl;

import com.lionsbeershop.model.Producto;
import com.lionsbeershop.model.Usuario;
import com.lionsbeershop.repositories.UsuarioRepository;
import com.lionsbeershop.services.UsuarioService;
import com.lionsbeershop.validators.UsuarioValidator;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public Usuario crearUsuario(Usuario usuario) {
        UsuarioValidator.validate(usuario);
        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario modificarUsuario(Usuario usuario) {
        return null;
    }

    @Override
    public void eliminarUsuario(Integer idUsuario) {

    }

    @Override
    public List<Usuario> listarUsuario() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario obtenerUsuarioPorIdUsuario(Integer idUsuario) {
        return usuarioRepository.findById(idUsuario).orElse(new Usuario());
    }

    @Override
    public Usuario fetchUserByCorreoyContra(String correoUsuario, String contrasenaUsuario){
        return usuarioRepository.findUsuarioByCorreoUsuarioAndContrasenaUsuario(correoUsuario, contrasenaUsuario);
    }

    @Override
    public void agregarProductoListaCompra(Usuario usuario, Producto producto) {
        usuario.getLista_compra().add(producto);
    }
    @Override
    public void agregarProductoAlCarrito(Usuario usuario, Producto producto) {

        if(producto.getStockP()>0){
            usuario.getCarritoCompras().add(producto);
        }

    }
    @Override
    public void eliminarProductoListaCompra(Usuario usuario, Producto producto) {

        usuario.getLista_compra().remove(producto);

    }

}
