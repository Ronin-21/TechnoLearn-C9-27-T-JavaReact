package com.ncc9project.technolearn.Service;

import com.ncc9project.technolearn.Model.Cursos;
import com.ncc9project.technolearn.Repository.CursosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CursosService {
    @Autowired CursosRepository cursosRepository;
    public Iterable<Cursos> getAllCursos() {
        return cursosRepository.findAll();
    }

    public Optional<Cursos> getCursoById(long id) {return cursosRepository.findById(id);}

}
