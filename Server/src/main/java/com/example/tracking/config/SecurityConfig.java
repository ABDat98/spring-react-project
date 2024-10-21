    package com.example.tracking.config;


    import com.example.tracking.Enum.Role;
    import com.example.tracking.Service.UserService;
    import lombok.NoArgsConstructor;
    import lombok.RequiredArgsConstructor;
    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.security.authentication.AuthenticationManager;
    import org.springframework.security.authentication.AuthenticationProvider;
    import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
    import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
    import org.springframework.security.config.annotation.web.builders.HttpSecurity;
    import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
    import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
    import org.springframework.security.config.http.SessionCreationPolicy;
    import org.springframework.security.core.context.SecurityContextHolder;
    import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
    import org.springframework.security.crypto.password.PasswordEncoder;
    import org.springframework.security.web.SecurityFilterChain;
    import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
    import org.springframework.security.web.authentication.logout.LogoutHandler;

    import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

    @Configuration
    @EnableWebSecurity
    @RequiredArgsConstructor
    @EnableMethodSecurity
    //Tell Spring to add Security Config
    public class SecurityConfig {


        private static final String[] WHITE_LIST_URL = {"/api/v1/auth/**",
                "/v2/api-docs",
                "/v3/api-docs",
                "/v3/api-docs/**",
                "/swagger-resources",
                "/swagger-resources/**",
                "/configuration/ui",
                "/configuration/security",
                "/swagger-ui/**",
                "/webjars/**",
                "/swagger-ui.html",
                "/api/v1/auth/**"};
        private final JwtAuthFilter jwtAuthFilter;
        private final UserService userService;

        private final PasswordEncoder passwordEncoder;


        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{

            http
                    .csrf(csrf -> csrf.disable())  // Disable CSRF for stateless API
                    .authorizeHttpRequests(authz -> authz
                            .requestMatchers("/api/v1/auth/**").permitAll()  // Allow all requests to auth endpoints
                            .anyRequest().authenticated()  // Require authentication for any other requests
                    )
                    .sessionManagement(session -> session
                            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // Set session to stateless
                    )
                    .authenticationProvider(authenticationProvider())  // Use your custom authentication provider
                    .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);  // Add your JWT filter

            return http.build();

        }



        @Bean
        public AuthenticationProvider authenticationProvider() {
            DaoAuthenticationProvider authenticationProvider1 = new DaoAuthenticationProvider();
            authenticationProvider1.setUserDetailsService(userService);
            authenticationProvider1.setPasswordEncoder(passwordEncoder);
            return authenticationProvider1;
        }


    }
