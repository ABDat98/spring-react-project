package com.example.tracking.Service;


import com.example.tracking.Enum.Role;
import com.example.tracking.Repository.UserRepository;
import com.example.tracking.Request.AuthenticationRequest;
import com.example.tracking.Request.RegisterRequest;
import com.example.tracking.Response.AuthenticationResponse;
import com.example.tracking.config.JwtUtils;
import com.example.tracking.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    public AuthenticationResponse register(RegisterRequest request) {
        Optional<User> existingUser = userRepository.findByEmail(request.getEmail());
        if (existingUser.isPresent()) {
            throw new IllegalArgumentException("This email is already in use.");
        }
        User user = User.builder()
                .email(request.getEmail())
                .username(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .role(Role.USER)
                .build();
        userRepository.save(user);
        var jwtToken = jwtUtils.generateToken(user);
        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        //It attempts to authenticate the user using authenticationManager.authenticate() with the UsernamePasswordAuthenticationToken.
        //If the email or password is invalid (i.e., the credentials are not found or are incorrect), an exception will be thrown by the authenticate() method—likely a BadCredentialsException.
        // This exception will stop the execution of the method, so none of the following lines will be executed.
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtUtils.generateToken(user);
        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .build();
    }
}
