package com.db14.achelin.dish;

import com.db14.achelin.restaurant.Restaurant;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
@Entity
@Table(name = "t_dish")
public class Dish {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dishID")
    private Long id;

    @Column(name = "dishName", length = 30)
    private String dishName;

    @Column(name = "price")
    private Long price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurantID")
    Restaurant restaurant;
}
