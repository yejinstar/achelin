package com.db14.achelin.user.service;

import com.db14.achelin.user.User;
import com.db14.achelin.user.dto.UserGetResponse;
import com.db14.achelin.user.dto.UserInfoResponse;
import com.db14.achelin.user.dto.UserJoinRequest;
import com.db14.achelin.user.repository.UserJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserJpaRepository userJpaRepository;

    public UserInfoResponse join(UserJoinRequest dto) {
        emailExist(dto.getEmail());
        User savedUser = userJpaRepository.save(
                User.builder()
                        .name(dto.getName())
                        .email(dto.getEmail())
                        .phoneNum(dto.getPhoneNum())
                        .validated(false)
                        .build()
        );

        return UserInfoResponse.builder()
                .userId(savedUser.getId())
                .message("join success.")
                .build();
    }

    public void emailExist(String email) {
        Boolean emailExist = false;
        Optional<User> user = userJpaRepository.findByEmail(email);
        if (user.isPresent()) {
            emailExist = true;
        }
    }

    public UserGetResponse getOneUser(Long userId) {
        User user = userJpaRepository.findById(userId)
                .orElseThrow(()->{
                    new IllegalArgumentException("user doesn't exist");
                    return null;
                });
        return UserGetResponse.builder()
                .email(user.getEmail())
                .name(user.getName())
                .validated(user.getValidated())
                .phoneNum(user.getPhoneNum())
                .build();
    }

    public UserInfoResponse deleteUser(Long userId) {
        User user = userJpaRepository.findById(userId)
                .orElseThrow(()->{
                    new IllegalArgumentException("user doesn't exist");
                    return null;
                });
        userJpaRepository.delete(user);
        return UserInfoResponse.builder()
                .userId(userId)
                .message("deleted user.")
                .build();
    }
}
