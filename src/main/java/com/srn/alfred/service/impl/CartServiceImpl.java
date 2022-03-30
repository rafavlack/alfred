package com.srn.alfred.service.impl;

import com.srn.alfred.Utils.exceptions.ExistingElementException;
import com.srn.alfred.domain.Cart;
import com.srn.alfred.domain.Customer;
import com.srn.alfred.domain.Item;
import com.srn.alfred.domain.Status;
import com.srn.alfred.dto.ProductDto;
import com.srn.alfred.repository.CartRepository;
import com.srn.alfred.service.CartService;
import com.srn.alfred.service.CustomerService;
import com.srn.alfred.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

public class CartServiceImpl implements CartService {

   @Autowired
   private CartRepository cartRepository;

   @Autowired
   private CustomerService customerService;

   @Autowired
   private ItemService itemService;

   public CartServiceImpl(CartRepository cartRepository, ItemService itemService) {
      this.cartRepository = cartRepository;
      this.itemService = itemService;
   }

   @Override
   public Cart createCart(Customer customer) {
      var cart = new Cart();
      cart.setCustomer(customer);
      return cartRepository.save(cart);
   }

   @Override
   public Cart showCart(Long id) {
      var existingCart = cartRepository.findCartByCustomerId(id);
      if (existingCart == null || existingCart.getCartStatus() == Status.valueOf("CLOSED")) {
         return createCart(customerService.findById(id));
      } else {
         return existingCart;
      }
   }

   // UPDATE CART
   @Override
   public Cart addItem(Cart cart, ProductDto productDto, int quantity) throws ExistingElementException {
      if (!isPresent(cart.getItemsInCart(), productDto.getName())) {
         var item = itemService.createItem(productDto, quantity);
         cart.addItem(item);
         cart.setCartValue(cart.getCartValue().add(item.getLineValue()));
         return cartRepository.save(cart);
      } else {
         throw new ExistingElementException("You ordered this item already. Please change the desired quantity.");
      }
   }

   @Override
   public Cart removeItemFromCart(Cart cart, Item item) {
      cart.removeItem(item);
      cart.setCartValue(cart.getCartValue().subtract(item.getLineValue()));
      itemService.deleteItem(item);
      return cartRepository.save(cart);
   }


   @Override
   public void updateItemInCart(Cart cart, ProductDto productDto, int quantity) {
      Optional<Item> optionalItem = cart.getItemsInCart().stream()
            .filter(item -> productDto.getName().equals(item.getName()))
            .findAny();
      if(optionalItem.isPresent()) {
        var existingItem = optionalItem.get();
         BigDecimal valueToAdd = BigDecimal.valueOf(quantity).multiply(existingItem.getUnitPrice());
         itemService.updateItem(existingItem, quantity);
         cart.setCartValue(cart.getCartValue().add(valueToAdd));
         cartRepository.save(cart);
      }

   }

   @Override
   public void deleteItem(Item item) {

   }

   private boolean isPresent(Set<Item> itemsList, String name) {
      List<Item> existingItem = itemsList.stream()
            .filter(i -> i.getName().equals(name))
            .collect(Collectors.toList());
      if (!existingItem.isEmpty()) {
         return true;
      } else {
         return false;
      }
   }
}
