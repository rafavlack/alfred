package com.srn.alfred.controller;

import com.srn.alfred.domain.Cart;
import com.srn.alfred.domain.Customer;
import com.srn.alfred.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController("/order")
public class CartController {

   private CartService cartService;

   @GetMapping("/show/{id}")
   public ResponseEntity<Cart> showCart(@PathVariable Long id) {
      return new ResponseEntity<>(cartService.showCart(id), HttpStatus.OK);
   }
}
