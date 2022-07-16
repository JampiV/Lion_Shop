package com.lionsbeershop.domain.services;

import com.lionsbeershop.domain.Producto;
import com.lionsbeershop.domain.Usuario;

import java.util.List;

public interface UsuarioService {

    Usuario crearUsuario(Usuario usuario);
    Usuario modificarUsuario(Usuario usuario);
    void eliminarUsuario(Integer idUsuario);
    List<Usuario> listarUsuario();
    Usuario obtenerUsuarioPorIdUsuario(Integer idUsuario);

    void agregarProductoListaCompra(Usuario usuario,Producto producto);
    void agregarProductoAlCarrito(Usuario usuario, Producto producto);
    void eliminarProductoAlCarrito(Usuario usuario, Producto producto);
    void eliminarProductoListaCompra(Usuario usuario, Producto producto);
    Usuario fetchUserByCorreoyContra(String correoUsuario, String contrasenaUsuario);

}
