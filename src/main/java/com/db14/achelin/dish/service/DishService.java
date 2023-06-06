package com.db14.achelin.dish.service;

import com.db14.achelin.dish.Dish;
import com.db14.achelin.dish.dto.DishInfoResponse;
import com.db14.achelin.dish.dto.DishRegisterRequest;
import com.db14.achelin.dish.dto.DishResponse;
import com.db14.achelin.dish.repository.DishJpaRepository;
import com.db14.achelin.restaurant.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DishService {
    private final DishJpaRepository dishJpaRepository;
    private final RestaurantService restaurantService;

    public DishResponse register(DishRegisterRequest dto) {
        Dish savedDish = dishJpaRepository.save(
                Dish.builder()
                        .dishName(dto.getDishName())
                        .price(dto.getPrice())
                        .restaurant(restaurantService.getOneRestaurant(dto.getRestaurantID()))
                        .build()
        );
        return DishResponse.builder()
                .dishName(savedDish.getDishName())
                .message("dish register success.")
                .build();
    }

    public DishInfoResponse getOneDishInfo(Long dishId) {
        Dish dish = dishJpaRepository.findById(dishId)
                .orElseThrow(() -> {
                            new IllegalArgumentException("dish doesn't exist");
                            return null;
                        }
                );
        return DishInfoResponse.builder()
                .dishName(dish.getDishName())
                .price(dish.getPrice())
                .restaurantName(dish.getRestaurant().getRestaurantName())
                .message("success.")
                .build();
    }

    public Dish getOneDish(Long dishId){
        Dish dish = dishJpaRepository.findById(dishId)
                .orElseThrow(() -> {
                            new IllegalArgumentException("dish doesn't exist");
                            return null;
                        }
                );
        return dish;
    }

    public DishResponse deleteDish(Long dishId) {
        Dish dish = dishJpaRepository.findById(dishId)
                .orElseThrow(()->{
                    new IllegalArgumentException("dish doesn't exist");
                    return null;
                });
        String dishName = dish.getDishName();
        dishJpaRepository.delete(dish);
        return DishResponse.builder()
                .dishName(dishName)
                .message("dish delete success.")
                .build();
    }
}
