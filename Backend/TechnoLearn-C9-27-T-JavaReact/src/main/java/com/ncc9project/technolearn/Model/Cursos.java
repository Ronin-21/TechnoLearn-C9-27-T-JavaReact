package com.ncc9project.technolearn.Model;

import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import java.util.ArrayList;

@Getter
@Setter
@Entity
@Table(name = "cursos")
public class Cursos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cursos")
    private long id;

   @Column(name = "id_video")
    private String id_video;

    @Column(name = "nombre_curso")
    private String nombreCurso;

    @Column(name = "descripcion_curso")
    private String descripcionCurso;

    @Column(name = "miniatura_curso")
    private String miniaturaCurso;

    @Type(JsonType.class)
    @Column(name = "urls", columnDefinition = "jsonb")
    private ArrayList<Object> urls;

    @Column(name = "precio")
    private float precio;

}