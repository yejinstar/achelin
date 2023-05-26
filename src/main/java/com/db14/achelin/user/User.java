package com.db14.achelin.user;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
@Entity
@Table(name = "t_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userID")
    private Long id;

    @Column(name = "name", length = 20)
    private String name;

    @Column(name = "phoneNum", length = 20)
    private String phoneNum;

    @Column(name = "email", length = 50)
    private String email;

    @Column(name = "validated", length = 10)
    private Boolean validated;

}
