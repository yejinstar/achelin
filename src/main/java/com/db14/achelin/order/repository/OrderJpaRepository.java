package com.db14.achelin.order.repository;

import com.db14.achelin.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderJpaRepository extends JpaRepository<Order, Long> {
    @Query("SELECT o FROM Order o JOIN o.dish d WHERE d.restaurant.id = :restaurantId")
    List<Order> getOrdersByRestaurantId(@Param("restaurantId") Long restaurantId);

    @Query("SELECT o FROM Order o WHERE o.user.id = :userId")
    List<Order> getOrdersByUserId(@Param("userId") Long userId);

}
