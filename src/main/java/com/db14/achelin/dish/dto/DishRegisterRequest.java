package com.db14.achelin.dish.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DishRegisterRequest {
    private String dishName;
    private Long price;
    private Long restaurantID;
}
