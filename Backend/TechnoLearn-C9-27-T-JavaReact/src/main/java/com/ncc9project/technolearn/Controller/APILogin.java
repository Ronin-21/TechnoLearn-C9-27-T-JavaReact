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
        String usuario = payload.get("usuario");
        String password = payload.get("password");


        if (usuario == null || password == null) {
            return ResponseEntity.badRequest().body("Usuario and password are required");
        }

        Usuario user = loginService.findByUsuario(usuario);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Usuario or password");
        }

        if (loginService.isValidPassword(password, user.getPassword())) {
            return ResponseEntity.ok("Login successfull");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Usuario or password");
        }

    }
}