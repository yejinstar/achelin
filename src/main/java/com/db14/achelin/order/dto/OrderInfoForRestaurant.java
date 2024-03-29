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
public class OrderInfoForRestaurant {
    private String dishName;
    private Long orderNum;
    private LocalDateTime orderTime;
}
