package com.ncc9project.technolearn.Controller;

import com.ncc9project.technolearn.Model.Mensaje;
import com.ncc9project.technolearn.Model.Usuario;
import com.ncc9project.technolearn.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
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
            return new ResponseEntity(new Mensaje("Correo electrónico y contraseña son requeridos")
            ,HttpStatus.BAD_REQUEST);
        }

        Usuario user = loginService.findByEmail(email);
        if (user == null) {
            return new ResponseEntity(new Mensaje("Correo electrónico o contraseña inválidos")
            ,HttpStatus.UNAUTHORIZED);
        }
        if (loginService.isValidPassword(password, user.getPassword())) {
            return new ResponseEntity(new Mensaje("Inicio de sesión exitoso")
            ,HttpStatus.OK);
        } else {
            return new ResponseEntity(new Mensaje("Correo electrónico o contraseña inválidos")
            ,HttpStatus.UNAUTHORIZED);
        }
    }
}