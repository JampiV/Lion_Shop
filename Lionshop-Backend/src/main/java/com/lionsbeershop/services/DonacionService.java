package com.lionsbeershop.services;
import com.lionsbeershop.model.Donacion;
import com.lionsbeershop.model.Usuario;

import java.util.List;

public interface DonacionService {
    Donacion registrarDonacion(Donacion donacion);
    Donacion modificarDonacion(Donacion donacion);
    void eliminarDonacion(Integer idDonacion);
    Donacion obtenerDonacionPorIdDonacion(Integer idDonacion);
    List<Donacion> listarDonacion();
    List<Donacion> listarDonacionesPorIdUsuario(Usuario usuario);

}
