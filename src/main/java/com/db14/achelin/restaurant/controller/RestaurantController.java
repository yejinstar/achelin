package com.db14.achelin.restaurant.controller;

import com.db14.achelin.common.Result;
import com.db14.achelin.restaurant.dto.RestaurantRegisterRequest;
import com.db14.achelin.restaurant.dto.RestaurantResponse;
import com.db14.achelin.restaurant.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/restaurant")
@RequiredArgsConstructor
public class RestaurantController {
    private final RestaurantService restaurantService;

    @PostMapping("/register")
    public ResponseEntity<Result<RestaurantResponse>> register(@RequestBody RestaurantRegisterRequest request) {
        RestaurantResponse restaurantResponse = restaurantService.register(request);
        return ResponseEntity.ok().body(Result.success(restaurantResponse));
    }

    @GetMapping("/{restaurantId}")
    public ResponseEntity<Result<RestaurantResponse>> getOneRestaurant(@PathVariable Long restaurantId){
        RestaurantResponse restaurantResponse = restaurantService.getOneRestaurantInfo(restaurantId);
        return ResponseEntity.ok().body(Result.success(restaurantResponse));
    }

    @DeleteMapping("/{restaurantId}")
    public ResponseEntity<Result<RestaurantResponse>> delete(@PathVariable Long restaurantId){
        RestaurantResponse restaurantResponse = restaurantService.deleteRestaurant(restaurantId);
        return ResponseEntity.ok().body(Result.success(restaurantResponse));
    }
}
