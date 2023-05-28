package com.db14.achelin.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserGetResponse {
    private String name;
    private String phoneNum;
    private String email;
    private Boolean validated;
}
