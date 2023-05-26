package com.db14.achelin.controller;

import com.db14.achelin.common.Result;
import com.db14.achelin.user.dto.UserJoinRequest;
import com.db14.achelin.user.dto.UserJoinResponse;
import com.db14.achelin.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    /**
     * 회원가입
     *
     * @param userJoinRequest
     * @return
     */
    @PostMapping("/join")
    public ResponseEntity<Result<UserJoinResponse>> join(@RequestBody UserJoinRequest userJoinRequest) {
        UserJoinResponse userJoinResponse = userService.join(userJoinRequest);
        return ResponseEntity.ok().body(Result.success(userJoinResponse));
    }
}
