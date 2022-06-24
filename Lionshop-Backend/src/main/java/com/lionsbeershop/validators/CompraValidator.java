package com.lionsbeershop.validators;
import com.lionsbeershop.exception.IncorrectResourceRequestException;
import com.lionsbeershop.model.Compra;
import com.lionsbeershop.model.Usuario;
import com.lionsbeershop.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
public class CompraValidator {

    public static void validate(Compra compra){

        if (compra.getEstadoCompra() == null){
            throw new IncorrectResourceRequestException("El estado no puede estar vacío.");
        }
        if (compra.getMetodoCompra() == null || compra.getMetodoCompra().trim().isEmpty()){
            throw new IncorrectResourceRequestException("El método de pago no puede estar vacío.");
        }

        if (compra.getMetodoCompra().length() < 3){
            throw new IncorrectResourceRequestException("El método de pago debe ser mayor a 3 caracteres.");
        }

        if (compra.getMetodoCompra().length() > 50){
            throw new IncorrectResourceRequestException("El método de pago debe ser menor a 50 caracteres.");
        }
    }
}


