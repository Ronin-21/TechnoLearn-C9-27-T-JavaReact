package com.ncc9project.technolearn.Repository;

import com.ncc9project.technolearn.Model.Cursos;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursosRepository extends CrudRepository<Cursos, Long> {
}
