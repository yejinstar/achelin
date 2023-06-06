package com.db14.achelin.order.service;

import com.db14.achelin.dish.service.DishService;
import com.db14.achelin.order.Order;
import com.db14.achelin.order.dto.OrderMenuRequest;
import com.db14.achelin.order.dto.OrderResponse;
import com.db14.achelin.order.repository.OrderJpaRepository;
import com.db14.achelin.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderJpaRepository orderJpaRepository;
    private final DishService dishService;
    private final UserService userService;

    public OrderResponse orderMenu(OrderMenuRequest request) {
        Order order = orderJpaRepository.save(
                Order.builder()
                        .user(userService.getOneUser(request.getUserID()))
                        .dish(dishService.getOneDish(request.getDishID()))
                        .orderTime(LocalDateTime.now().withSecond(0).withNano(0))
                        .served(false)
                        .build()
        );
        order.setOrderNum(order.getId());
        orderJpaRepository.save(order);
        return OrderResponse.builder()
                .OrderNum(order.getOrderNum())
                .restaurantName(order.getDish().getRestaurant().getRestaurantName())
                .userName(order.getUser().getName())
                .dishName(order.getDish().getDishName())
                .served(order.getServed())
                .orderTime(order.getOrderTime())
                .build();
    }

    public OrderResponse serveMenu(Long orderId) {
        Order order = orderJpaRepository.findById(orderId)
                .orElseThrow(()->{
                    new IllegalArgumentException("order doesn't exist");
                    return null;
                });
        order.served();
        orderJpaRepository.save(order);
        return OrderResponse.builder()
                .OrderNum(order.getId())
                .restaurantName(order.getDish().getRestaurant().getRestaurantName())
                .userName(order.getUser().getName())
                .dishName(order.getDish().getDishName())
                .served(order.getServed())
                .orderTime(order.getOrderTime())
                .build();
    }

    public OrderResponse getOrderInfo(Long orderId) {
        Order order = orderJpaRepository.findById(orderId)
                .orElseThrow(()->{
                    new IllegalArgumentException("order doesn't exist");
                    return null;
                });
        return OrderResponse.builder()
                .OrderNum(order.getId())
                .restaurantName(order.getDish().getRestaurant().getRestaurantName())
                .userName(order.getUser().getName())
                .dishName(order.getDish().getDishName())
                .served(order.getServed())
                .orderTime(order.getOrderTime())
                .build();
    }


    public String cancelOrder(Long orderId) {
        Order order = orderJpaRepository.findById(orderId)
                .orElseThrow(()->{
                    new IllegalArgumentException("order doesn't exist");
                    return null;
                });
        orderJpaRepository.delete(order);
        return "order cancel";
    }
}
