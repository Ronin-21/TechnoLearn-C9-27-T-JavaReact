package com.ncc9project.technolearn.Service;

import com.ncc9project.technolearn.DTO.*;
import com.ncc9project.technolearn.Model.Cursos;
import com.ncc9project.technolearn.Model.Usuario;
import com.ncc9project.technolearn.Repository.CursosRepository;
import com.ncc9project.technolearn.Repository.UsuarioRepository;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final CursosRepository cursosRepository;

    @Autowired public UsuarioService(UsuarioRepository usuarioRepository,
                                     CursosRepository cursosRepository){
        this.usuarioRepository = usuarioRepository;
        this.cursosRepository = cursosRepository;
    }

    ModelMapper mapper = new ModelMapper();

    public ListUsuarioDTO getAlluser() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        Set<UsuarioDTO> list = new TreeSet<>(Comparator.comparing(UsuarioDTO::getId));

        usuarios.stream().map(usuario ->
                list.add(mapper.map(usuario, UsuarioDTO.class)))
                .collect(Collectors.toSet());

        return new ListUsuarioDTO(list);
    }

    public UsuarioDTO getUserById(long id) {
        Usuario usuario = usuarioRepository.findById(id).orElse(null);
        return mapper.map(usuario, UsuarioDTO.class);
    }

    public UsuarioDTO saveUser(UsuarioDTO usuarioDTO){
        Usuario usuario = mapper.map(usuarioDTO, Usuario.class);
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1, 1024, 1, usuario.getPassword());
        usuario.setPassword(hash);
        usuarioRepository.save(usuario);
        return mapper.map(usuario, UsuarioDTO.class);
    }

    public UsuarioCursosDTO agregarCurso(UsuarioCursosDTO usuarioCursoDTO){
        Set<Long> usuarioCursos = new HashSet<>();
        Set<Cursos> cursosSet = null;
        Usuario usuario = usuarioRepository.findById(usuarioCursoDTO.getIdUsuario()).get();
        Cursos curso = cursosRepository.findById(usuarioCursoDTO.getIdCurso()).get();
        cursosSet = usuario.getCursosUsuario();
        cursosSet.add(curso);
        usuario.setCursosUsuario(cursosSet);
        usuarioRepository.save(usuario);
        for (Cursos cursito : cursosSet){
            usuarioCursos.add(cursito.getId());
        }
        usuarioCursoDTO.setIdCursos(usuarioCursos);
        return mapper.map(usuarioCursoDTO, UsuarioCursosDTO.class);
    }

    public ListUserInfoDTO agregarProgreso(UserInfoDTO userInfoDTO, long userId) {
        Set<Cursos> cursosSet = null;
        Set<UserInfoDTO> userInfoDTOS = new HashSet<>();
        UserInfoDTO userInfoDto = new UserInfoDTO();
        Usuario usuario = usuarioRepository.findById(userId).get();
        cursosSet = usuario.getCursosUsuario();
        userInfoDTOS = usuario.getUserInfo();
        for(Cursos curso : cursosSet){
            if(curso.getId() == userInfoDTO.getIdCurso()){
                for(UserInfoDTO userinfo : userInfoDTOS){
                    if(userinfo.getIdCurso() == userInfoDTO.getIdCurso()){
                        userinfo.setProgreso(userInfoDTO.getProgreso());
                        break;
                    }
                }
                userInfoDto.setProgreso(userInfoDTO.getProgreso());
                userInfoDto.setIdCurso(userInfoDTO.getIdCurso());
                userInfoDTOS.add(userInfoDto);
                break;
            }
        }
        usuario.setUserInfo(userInfoDTOS);
        usuarioRepository.save(usuario);

        Set<UserInfoDTO> userInfo = usuario.getUserInfo();
        Set<UserInfoDTO> userInfoSet = new TreeSet<>(Comparator.comparing(UserInfoDTO::getIdCurso));
        userInfo.stream().map(userinfo ->
                        userInfoSet.add(mapper.map(userinfo, UserInfoDTO.class)))
                .collect(Collectors.toSet());

        return new ListUserInfoDTO(userInfoSet);
    }

    public MensajeDTO comprarSuscripcion(TarjetaDTO tarjetaDTO){
        if(validarTarjeta(tarjetaDTO.getNumeroTarjeta())){
            return new MensajeDTO("Gracias por tu compra");
        } else {
            return new MensajeDTO("Tarjeta invalida");
        }
    }

    private static boolean validarTarjeta(String numeroTarjeta){
        int[] tarjetaInt = new int[numeroTarjeta.length()];

        for (int i = 0; i < numeroTarjeta.length(); i++){
            tarjetaInt[i] = Integer.parseInt(numeroTarjeta.substring(i, i + 1));
        }

        for (int i = tarjetaInt.length - 2; i >= 0; i = i - 2){
            int tempValor = tarjetaInt[i];
            tempValor = tempValor * 2;
            if(tempValor > 9){
                tempValor = tempValor % 10 + 1;
            }
            tarjetaInt[i] = tempValor;
        }

        int total = 0;
        for (int i =  0; i < tarjetaInt.length; i++){
            total += tarjetaInt[i];
        }
        if (total % 10 == 0){
            return true;
        } else {
            return false;
        }
    }
}