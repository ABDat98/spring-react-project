package com.example.tracking.Controller;


import com.example.tracking.Request.AuthenticationRequest;
import com.example.tracking.Request.RegisterRequest;
import com.example.tracking.Response.AuthenticationResponse;
import com.example.tracking.Service.AuthenticationService;
import com.example.tracking.dto.UserDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
@CrossOrigin
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            AuthenticationResponse response = authenticationService.register(request);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {

        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @GetMapping("/me")
    public ResponseEntity<UserDto> getUserByToken(@RequestHeader("Authorization") String authHeader) throws JsonProcessingException {
        String token = authHeader.replace("Bearer ", "");
        ObjectMapper mapper = new ObjectMapper();
        Map<String, String> map = mapper.readValue(token, Map.class);
        String tokent = map.get("token");

        return authenticationService.getUserByToken(tokent)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }
}
