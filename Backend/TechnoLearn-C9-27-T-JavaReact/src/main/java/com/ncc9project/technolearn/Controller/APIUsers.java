package com.ncc9project.technolearn.Controller;

import com.ncc9project.technolearn.Model.Usuario;
import com.ncc9project.technolearn.Service.UsuarioService;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class APIUsers {

    @Autowired UsuarioService usuarioService;

    @GetMapping("/todos")
    public Iterable<Usuario> getAllUser() {
        return usuarioService.getAlluser();
    }

    @GetMapping("/buscar/{id}")
    public Optional<Usuario> getUserById(@PathVariable("id") long id) {
        return usuarioService.getUserById(id);
    }

    @PostMapping("/registro")
    public ResponseEntity<String> saveUser(@RequestBody Usuario usuario){
        Usuario nuevoUsuario = usuarioService.saveUser(usuario);
        if (nuevoUsuario != null) {
            return ResponseEntity.ok("Registro exitoso");
        } else {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




}
