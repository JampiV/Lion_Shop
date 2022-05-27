package com.lionsbeershop.controller;

import com.lionsbeershop.model.Usuario;
import com.lionsbeershop.repositories.ProductoRepository;
import com.lionsbeershop.repositories.UsuarioRepository;
import com.lionsbeershop.services.UsuarioService;
import com.lionsbeershop.WrapperResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private  final UsuarioService usuarioService;

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping
    public ResponseEntity<WrapperResponse<Usuario>> registrarUsuario(@Valid @RequestBody Usuario usuario) {
        Usuario usuarioNew = usuarioService.crearUsuario(usuario);
        return new WrapperResponse<>(true,"success", usuarioNew).createResponse();
    }
    @PostMapping("/login")
    public ResponseEntity<WrapperResponse<Usuario>> logIn (@Valid @RequestBody Usuario user) throws Exception{
        String correoUsuario= user.getCorreoUsuario();
        String contrasenaUsuario= user.getContrasenaUsuario();
        Usuario userObj=null;
        if (correoUsuario !=null && contrasenaUsuario!= null){
            userObj=usuarioService.fetchUserByCorreoyContra(correoUsuario,contrasenaUsuario);
        }
        if(userObj==null){
            throw new Exception("Escriba correctamente sus datos.");
        }
        return new WrapperResponse<>(true,"success", userObj).createResponse();}

    @GetMapping
    public ResponseEntity<WrapperResponse<List<Usuario>>> listarUsuario(){
        List<Usuario> usuarios = usuarioService.listarUsuario();
        return new WrapperResponse<>(true, "success", usuarios).createResponse();
    }

    @GetMapping("/{idUsuario}")
    public ResponseEntity<WrapperResponse<Usuario>> obtenerUsuarioPorIdUsuario(@PathVariable("idUsuario") Integer idUsuario) {
        Usuario usuario = usuarioService.obtenerUsuarioPorIdUsuario(idUsuario);
        return new WrapperResponse<>(true,"success",usuario).createResponse();
    }

}
