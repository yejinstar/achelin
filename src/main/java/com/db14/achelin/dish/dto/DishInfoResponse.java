package com.db14.achelin.dish.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DishInfoResponse {
    private Long price;
    private String dishName;
    private String restaurantName;
    private String message;
}
