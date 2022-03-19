package com.srn.alfred.service.impl;

import com.srn.alfred.Utils.Utils;
import com.srn.alfred.domain.Item;
import com.srn.alfred.dto.ProductDto;
import com.srn.alfred.repository.ItemRepository;
import com.srn.alfred.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {

   @Autowired
   private ItemRepository itemRepository;

   public ItemServiceImpl(ItemRepository itemRepository) {
      this.itemRepository = itemRepository;
   }

   @Override
   public Item createItem(ProductDto productDto, int quantity) {
      Item newItem = new Item();
      newItem.setItemName(productDto.getName());
      newItem.setItemQuantity(quantity);
      newItem.setUnitPrice(productDto.getProductDetails().getUnitPrice());
      newItem.setLineValue(Utils.calculateValue(productDto.getProductDetails().getUnitPrice(), quantity));
      return itemRepository.save(newItem);
   }

   @Override
   public Item updateItem(Item item, int quantity) {
      item.setItemQuantity(quantity);
      item.setLineValue(Utils.calculateValue(item.getUnitPrice(), quantity));
      return itemRepository.save(item);
   }

   @Override
   public void deleteItem(Item item) {
      itemRepository.delete(item);
   }
}
