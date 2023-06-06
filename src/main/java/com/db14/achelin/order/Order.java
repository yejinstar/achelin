package com.db14.achelin.order;

import com.db14.achelin.dish.Dish;
import com.db14.achelin.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
@Entity
@Table(name = "t_order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userID")
    User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dishID")
    Dish dish;

    @Column(name = "orderNum")
    private Long orderNum;

    @Column(name = "served")
    private Boolean served;

    @Column(name = "orderTime")
    private LocalDateTime orderTime;

    public void served(){
        this.served = true;
    }

    public void setOrderNum(Long orderNum){
        this.orderNum = orderNum;
    }
}
