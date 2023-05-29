package com.db14.achelin.restaurant.repository;

import com.db14.achelin.restaurant.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantJpaRepository extends JpaRepository<Restaurant, Long> {
}
