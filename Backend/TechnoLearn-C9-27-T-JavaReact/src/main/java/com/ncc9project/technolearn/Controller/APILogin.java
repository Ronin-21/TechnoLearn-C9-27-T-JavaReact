package com.ncc9project.technolearn.Controller;

import com.ncc9project.technolearn.Model.Usuario;
import com.ncc9project.technolearn.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/login")
public class APILogin {
    @Autowired LoginService loginService;

    public APILogin(LoginService loginService) {
        this.loginService = loginService;
    }


    @PostMapping
    public ResponseEntity<String> login(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String password = payload.get("password");

        if (email == null || password == null) {
            return ResponseEntity.badRequest().body("Correo electrónico y contraseña son requeridos");
        }

        Usuario user = loginService.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Correo electrónico o contraseña inválidos");
        }

        if (loginService.isValidPassword(password, user.getPassword())) {
            return ResponseEntity.ok("Inicio de sesión exitoso");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Correo electrónico o contraseña inválidos");
        }

    }
}