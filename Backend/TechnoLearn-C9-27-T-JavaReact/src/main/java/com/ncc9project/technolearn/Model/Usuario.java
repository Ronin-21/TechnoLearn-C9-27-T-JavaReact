package com.ncc9project.technolearn.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "usuario")
public class Usuario {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id_usuario")
        private long id;

        @Column(name = "nombre_completo")
        private String nombre;

        @Column(name = "email")
        private String email;

        @Column(name = "usuario")
        private String usuario;

        @Column(name = "cursos_usuario")
        private String cursosUsuario;

        @Column(name = "contraseña")
        private String password;

}
