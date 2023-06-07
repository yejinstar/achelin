package com.db14.achelin.order.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MyOrderList {
    private List<Long> waiting;
    private List<OrderResponse> myOrderList;
}
