package com.db14.achelin.user.controller;

import com.db14.achelin.common.Result;
import com.db14.achelin.user.dto.UserGetResponse;
import com.db14.achelin.user.dto.UserInfoResponse;
import com.db14.achelin.user.dto.UserJoinRequest;
import com.db14.achelin.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<Result<UserInfoResponse>> join(@RequestBody UserJoinRequest userJoinRequest) {
        UserInfoResponse userJoinResponse = userService.join(userJoinRequest);
        return ResponseEntity.ok().body(Result.success(userJoinResponse));
    }

    /**
     * 회원조회
     * @param userId
     * @return
     */
    @GetMapping("/{userId}")
    public ResponseEntity<Result<UserGetResponse>> getOneUser(@PathVariable Long userId){
        UserGetResponse userGetResponse = userService.getOneUser(userId);
        return ResponseEntity.ok().body(Result.success(userGetResponse));
    }

    /**
     * 회원삭제
     * @param userId
     * @return
     */
    @DeleteMapping("/{userId}")
    public ResponseEntity<Result<UserInfoResponse>> delete(@PathVariable Long userId){
        UserInfoResponse userInfoResponse = userService.deleteUser(userId);
        return ResponseEntity.ok().body(Result.success(userInfoResponse));
    }
}
