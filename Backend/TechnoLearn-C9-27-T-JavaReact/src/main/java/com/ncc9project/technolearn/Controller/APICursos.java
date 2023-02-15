package com.ncc9project.technolearn.Controller;

import com.ncc9project.technolearn.Model.Cursos;
import com.ncc9project.technolearn.Service.CursosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/cursos")
public class APICursos {
    @Autowired CursosService cursosService;

    @GetMapping("/list")
    public Iterable<Cursos> getAllCursos() {return cursosService.getAllCursos();}

    @GetMapping("/{id}")
    public Optional<Cursos> getCursoById(@PathVariable("id") long id) { return cursosService.getCursoById(id);}
}
