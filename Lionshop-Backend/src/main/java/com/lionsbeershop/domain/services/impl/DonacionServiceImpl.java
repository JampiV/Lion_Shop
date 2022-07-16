package com.lionsbeershop.domain.services.impl;
import com.lionsbeershop.domain.services.DonacionService;
import com.lionsbeershop.infrastracture.DonacionRepository;
import com.lionsbeershop.infrastracture.UsuarioRepository;
import com.lionsbeershop.domain.Donacion;
import com.lionsbeershop.domain.Usuario;
import com.lionsbeershop.infrastracture.validators.DonacionValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DonacionServiceImpl implements DonacionService {

    private final DonacionRepository donacionRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public DonacionServiceImpl(DonacionRepository donacionRepository){
        this.donacionRepository=donacionRepository;
    }

    @Transactional
    @Override
    public Donacion registrarDonacion(Donacion donacion) {
        DonacionValidator.validate(donacion);
        return donacionRepository.save(donacion);
    }

    @Override
    public Donacion modificarDonacion(Donacion donacion) {
        DonacionValidator.validate(donacion);
        return donacionRepository.save(donacion);
    }

    @Override
    public void eliminarDonacion(Integer idDonacion) {
        donacionRepository.deleteById(idDonacion);
    }

    @Override
    public Donacion obtenerDonacionPorIdDonacion(Integer idDonacion) {
        return donacionRepository.findById(idDonacion).orElse(new Donacion());
    }

    @Override
    public List<Donacion> listarDonacion() {
        return donacionRepository.findAll();
    }

    @Override
    public List<Donacion> listarDonacionesPorIdUsuario(Usuario usuario) {
        List<Donacion> usuarioId = donacionRepository.listarDonacionesPorIdUsuario(usuario);
        return usuarioId;
    }

}
