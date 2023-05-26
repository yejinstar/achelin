package com.db14.achelin.user.service;

import com.db14.achelin.user.User;
import com.db14.achelin.user.dto.UserJoinRequest;
import com.db14.achelin.user.dto.UserJoinResponse;
import com.db14.achelin.user.repository.UserJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserJpaRepository userJpaRepository;

    public UserJoinResponse join(UserJoinRequest dto) {
        emailExist(dto.getEmail());
        User savedUser = userJpaRepository.save(
                User.builder()
                        .name(dto.getName())
                        .email(dto.getEmail())
                        .phoneNum(dto.getPhoneNum())
                        .validated(false)
                        .build()
        );

        return UserJoinResponse.builder()
                .name(savedUser.getName())
                .email(savedUser.getEmail())
                .build();
    }

    public void emailExist(String email) {
        Boolean emailExist = false;
        Optional<User> user = userJpaRepository.findByEmail(email);
        if (user.isPresent()) {
            emailExist = true;
        }
    }
}
