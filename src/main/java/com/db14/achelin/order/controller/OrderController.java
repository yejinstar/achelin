package com.db14.achelin.order.controller;

import com.db14.achelin.common.Result;
import com.db14.achelin.order.dto.MyOrderList;
import com.db14.achelin.order.dto.OrderListForRestaurant;
import com.db14.achelin.order.dto.OrderMenuRequest;
import com.db14.achelin.order.dto.OrderResponse;
import com.db14.achelin.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @PostMapping("/menu")
    public ResponseEntity<Result<OrderResponse>> orderMenu(@RequestBody OrderMenuRequest request) {
        OrderResponse orderInfoResponse = orderService.orderMenu(request);
        return ResponseEntity.ok().body(Result.success(orderInfoResponse));
    }

    @GetMapping("/serve/{orderId}")
    public ResponseEntity<Result<OrderResponse>> serveMenu(@PathVariable Long orderId) {
        OrderResponse orderInfoResponse = orderService.serveMenu(orderId);
        return ResponseEntity.ok().body(Result.success(orderInfoResponse));
    }

    /**
     * 주문 단순 상세 조회
     * @param orderId
     * @return
     */
    @GetMapping("/{orderId}")
    public ResponseEntity<Result<OrderResponse>> OrderInfo(@PathVariable Long orderId) {
        OrderResponse orderInfoResponse = orderService.getOrderInfo(orderId);
        return ResponseEntity.ok().body(Result.success(orderInfoResponse));
    }

    @DeleteMapping("/{orderId}")
    public ResponseEntity<Result<String>> cancelOrder(@PathVariable Long orderId) {
        String cancelMessage = orderService.cancelOrder(orderId);
        return ResponseEntity.ok().body(Result.success(cancelMessage));
    }

    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<Result<OrderListForRestaurant>> orderListForRestaurant(@PathVariable Long restaurantId) {
        OrderListForRestaurant list = orderService.orderListForRestaurant(restaurantId);
        return ResponseEntity.ok().body(Result.success(list));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Result<MyOrderList>> myOrderList(@PathVariable Long userId) {
        MyOrderList list = orderService.myOrderList(userId);
        return ResponseEntity.ok().body(Result.success(list));
    }
}
