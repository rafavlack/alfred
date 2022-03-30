package com.srn.alfred.dto;

import com.srn.alfred.domain.ProductDetails;
import lombok.Data;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

@Data
public class ProductDto {

   @NotBlank(message = "The product must be in a category.")
   private String category;

   @NotBlank(message = "Product name is mandatory.")
   private String name;

   @Valid
   private ProductDetails productDetails;
}
