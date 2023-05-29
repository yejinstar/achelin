package com.db14.achelin.restaurant.service;

import com.db14.achelin.restaurant.Restaurant;
import com.db14.achelin.restaurant.dto.RestaurantRegisterRequest;
import com.db14.achelin.restaurant.dto.RestaurantResponse;
import com.db14.achelin.restaurant.repository.RestaurantJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RestaurantService {
    private final RestaurantJpaRepository restaurantJpaRepository;

    public RestaurantResponse register(RestaurantRegisterRequest dto) {
        Restaurant savedRestaurant = restaurantJpaRepository.save(
                Restaurant.builder()
                        .restaurantName(dto.getRestaurantName())
                        .build()
        );

        return RestaurantResponse.builder()
                .restaurantName(savedRestaurant.getRestaurantName())
                .message("restaurant register success.")
                .build();
    }

    public RestaurantResponse getOneRestaurantInfo(Long restaurnatId) {
        Restaurant restaurant = restaurantJpaRepository.findById(restaurnatId)
                .orElseThrow(() -> {
                            new IllegalArgumentException("restaurant doesn't exist");
                            return null;
                        }
                );
        return RestaurantResponse.builder()
                .restaurantName(restaurant.getRestaurantName())
                .message("success.")
                .build();
    }

    public Restaurant getOneRestaurant(Long restaurnatId) {
        Restaurant restaurant = restaurantJpaRepository.findById(restaurnatId).get();
        return restaurant;
    }

    public RestaurantResponse deleteRestaurant(Long restaurnatId) {
        Restaurant restaurant = restaurantJpaRepository.findById(restaurnatId)
                .orElseThrow(()->{
                    new IllegalArgumentException("user doesn't exist");
                    return null;
                });
        String restaurantName = restaurant.getRestaurantName();
        restaurantJpaRepository.delete(restaurant);
        return RestaurantResponse.builder()
                .restaurantName(restaurantName)
                .message("restaurant delete success.")
                .build();
    }
}
