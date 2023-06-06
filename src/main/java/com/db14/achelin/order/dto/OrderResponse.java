package com.db14.achelin.order.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {
    private Long OrderNum;
    private String dishName;
    private String restaurantName;
    private String userName;
    private Boolean served;
    private LocalDateTime orderTime;
}
