package com.srn.alfred.service;

import com.srn.alfred.domain.Item;
import com.srn.alfred.dto.ProductDto;

public interface ItemService {

   Item createItem(ProductDto productDto, int quantity);

   Item updateItem(Item item, int quantity);

   void deleteItem(Item item);
}
