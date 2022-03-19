package com.srn.alfred.service;

import com.srn.alfred.Utils.exceptions.ExistingElementException;
import com.srn.alfred.domain.Product;
import com.srn.alfred.dto.ProductDto;

import java.util.Set;

public interface ProductService {

   ProductDto createProduct(ProductDto productDto) throws ExistingElementException;

   ProductDto readProduct(String productName);

   Set<ProductDto> readAllProducts();

   ProductDto updateProduct(ProductDto updated);

   void deleteProduct(Long id);
}
