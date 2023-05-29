package com.db14.achelin.dish.repository;

import com.db14.achelin.dish.Dish;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DishJpaRepository extends JpaRepository<Dish, Long> {
}
