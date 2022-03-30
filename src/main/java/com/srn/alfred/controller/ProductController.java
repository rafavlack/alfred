package com.srn.alfred.controller;

import com.srn.alfred.Utils.exceptions.ExistingElementException;
import com.srn.alfred.dto.ProductDto;
import com.srn.alfred.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.util.NoSuchElementException;
import java.util.Set;

@Validated
@RestController
@RequestMapping("/products")
public class ProductController {

   @Autowired
   private ProductService productService;

   @PostMapping("/new")
   ResponseEntity<? extends Object> createNew(@Valid @RequestBody ProductDto productDto) {
      try {
         productService.createProduct(productDto);
      } catch (ExistingElementException | ConstraintViolationException  exception) {
         return new ResponseEntity<>(exception.getMessage(), HttpStatus.UNAUTHORIZED);
      }
      return new ResponseEntity<>(productService.readProduct(productDto.getName()), HttpStatus.CREATED);
   }

   @GetMapping("/all")
   ResponseEntity<Set<ProductDto>> readAll() {
      return new ResponseEntity<>(productService.readAllProducts(), HttpStatus.OK);
   }

   @GetMapping("{name}")
   ResponseEntity<? extends Object>readProduct(@PathVariable String name) {
      try {
         productService.readProduct(name);
      } catch (NoSuchElementException exception) {
         return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
      }
      return new ResponseEntity<>(productService.readProduct(name), HttpStatus.FOUND);
   }

   @PutMapping("/update")
   ResponseEntity<? extends Object>updateProduct(@Valid @RequestBody ProductDto productDto) {
      try {
         var updated = productService.updateProduct(productDto);
         return new ResponseEntity<>(updated, HttpStatus.CREATED);
      } catch (NoSuchElementException exception) {
         return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
      }
   }

   @DeleteMapping("/{id}")
   ResponseEntity<? extends Object>deleteProduct(@PathVariable Long id) {
      try {
         productService.deleteProduct(id);
      } catch (NoSuchElementException exception) {
         return new ResponseEntity(exception.getMessage(), HttpStatus.NOT_FOUND);
      }
      return new ResponseEntity("Product with ID " + id + " has been deleted from database.", HttpStatus.GONE);
   }
} 
