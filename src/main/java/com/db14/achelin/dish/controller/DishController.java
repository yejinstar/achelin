package com.db14.achelin.dish.controller;

import com.db14.achelin.common.Result;
import com.db14.achelin.dish.dto.DishInfoResponse;
import com.db14.achelin.dish.dto.DishRegisterRequest;
import com.db14.achelin.dish.dto.DishResponse;
import com.db14.achelin.dish.service.DishService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/dish")
@RequiredArgsConstructor
public class DishController {
    private final DishService dishService;

    @PostMapping("/register")
    public ResponseEntity<Result<DishResponse>> register(@RequestBody DishRegisterRequest request) {
        DishResponse dishResponse = dishService.register(request);
        return ResponseEntity.ok().body(Result.success(dishResponse));
    }

    @GetMapping("/{dishId}")
    public ResponseEntity<Result<DishInfoResponse>> getOneDishInfo(@PathVariable Long dishId){
        DishInfoResponse dishInfoResponse = dishService.getOneDishInfo(dishId);
        return ResponseEntity.ok().body(Result.success(dishInfoResponse));
    }

    @DeleteMapping("/{dishId}")
    public ResponseEntity<Result<DishResponse>> delete(@PathVariable Long dishId){
        DishResponse dishResponse = dishService.deleteDish(dishId);
        return ResponseEntity.ok().body(Result.success(dishResponse));
    }
}
