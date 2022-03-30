package com.srn.alfred.service;

import com.srn.alfred.Utils.exceptions.ExistingElementException;
import com.srn.alfred.domain.Cart;
import com.srn.alfred.domain.Customer;
import com.srn.alfred.domain.Item;
import com.srn.alfred.dto.ProductDto;
import org.springframework.stereotype.Service;

@Service
public interface CartService {

   Cart createCart(Customer customer);

   Cart showCart(Long id);

   Cart addItem(Cart cart, ProductDto productDto, int quantity) throws ExistingElementException;

   Cart removeItemFromCart(Cart cart, Item item);

   void updateItemInCart(Cart cart, ProductDto productDto, int quantity);

   void deleteItem(Item item);
}
