package com.lionsbeershop.infrastracture.validators;

import com.lionsbeershop.infrastracture.exception.IncorrectResourceRequestException;
import com.lionsbeershop.domain.Donacion;

public class DonacionValidator {

    public static void validate(Donacion donacion){

        if (donacion.getMetodoPago().length() < 3) {
            throw new IncorrectResourceRequestException("El método de pago debe ser mayor a 3 caracteres.");
        }

        if (donacion.getMetodoPago().length() > 50) {
            throw new IncorrectResourceRequestException("El método de pago debe ser menor a 50 caracteres.");
        }
    }
}
