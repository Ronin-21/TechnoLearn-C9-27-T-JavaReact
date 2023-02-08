package com.ncc9project.technolearn.Service;

import com.ncc9project.technolearn.Model.Usuario;
import com.ncc9project.technolearn.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired UsuarioRepository usuarioRepository;

    public Iterable<Usuario> getAlluser() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> getUserById(long id) {
        return usuarioRepository.findById(id);
    }

}