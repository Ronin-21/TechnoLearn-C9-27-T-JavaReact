package com.ncc9project.technolearn.Model;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
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

        @Column(name = "contraseña")
        private String password;

        @Column(name = "suscripto")
        private int suscripto;

        @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
        @JoinTable(name = "usuario_cursos",
                joinColumns = @JoinColumn(name = "id_usuario", referencedColumnName = "id_usuario"),
                inverseJoinColumns = @JoinColumn(name = "id_curso", referencedColumnName = "id_curso"))
        private Set<Cursos> cursosUsuario = new HashSet<>();
}
