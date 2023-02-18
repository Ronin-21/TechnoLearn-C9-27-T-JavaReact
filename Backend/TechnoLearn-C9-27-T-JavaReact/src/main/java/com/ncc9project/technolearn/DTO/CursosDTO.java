package com.ncc9project.technolearn.DTO;

import com.ncc9project.technolearn.Model.Usuario;
import lombok.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class CursosDTO {

    private long id;

    private String id_video;

    private String nombreCurso;

    private String descripcionCurso;

    private String miniaturaCurso;

    private ArrayList<Object> urls;

    private float precio;

    private String acceso;
}
