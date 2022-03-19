package com.srn.alfred.service.impl;

import com.srn.alfred.Utils.exceptions.ExistingElementException;
import com.srn.alfred.Utils.transformer.ProductConverter;
import com.srn.alfred.domain.Product;
import com.srn.alfred.dto.ProductDto;
import com.srn.alfred.repository.ProductRepository;
import com.srn.alfred.service.ProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

   @Autowired
   private ProductRepository productRepository;

   @Autowired
   private ProductConverter converter;

   public ProductServiceImpl(ProductRepository productRepository, ProductConverter converter) {
      this.productRepository = productRepository;
      this.converter = converter;
   }

   @Override
   public ProductDto createProduct(ProductDto productDto) throws ExistingElementException {
      if(!productRepository.existsByName(productDto.getName())) {
         productRepository.save(converter.transformToEntity(productDto));
         return converter.transformToDto(findProductByName(productDto.getName()));
      } else {
         throw new ExistingElementException("The product you are trying to add is already created.");
      }
   }

   @Override
   public ProductDto readProduct(String name) {
      var existingProduct = findProductByName(name);
      if (existingProduct != null) {
         return converter.transformToDto(existingProduct);
      } else {
         throw new NoSuchElementException("This product is not registered in database.");
      }
   }

   @Override
   public Set<ProductDto> readAllProducts() {
      List<Product> productList = productRepository.findAll();
      return productList.stream()
            .map(converter::transformToDto)
            .collect(Collectors.toSet());
   }

   @Override
   public ProductDto updateProduct(ProductDto updated) {
      var existingProduct = findProductByName(updated.getName());
      if (existingProduct != null) {
         BeanUtils.copyProperties(updated, existingProduct);
         productRepository.save(existingProduct);
         return converter.transformToDto(existingProduct);
      } else {
         throw new NoSuchElementException("The element to be updated is not found in database.");
      }
   }

   @Override
   public void deleteProduct(Long id) {
      productRepository.deleteById(id);
   }

   private Product findProductByName(String name) {
      Product alreadyRegistered = null;
      Optional<Product> optional = productRepository.findAll()
            .stream()
            .filter(product -> product.getName().equalsIgnoreCase(name))
            .findFirst();
      if (optional.isPresent()) {
         alreadyRegistered = optional.get();
      } else {
         return null;
      }
      return alreadyRegistered;
   }
}