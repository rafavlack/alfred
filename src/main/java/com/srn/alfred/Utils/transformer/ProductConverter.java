package com.srn.alfred.Utils.transformer;

import com.srn.alfred.domain.Product;
import com.srn.alfred.dto.ProductDto;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class ProductConverter implements Converter<Product, ProductDto> {

   private ModelMapper mapper;

   public ProductConverter(ModelMapper mapper) {
      this.mapper = mapper;
   }

   @Override
   public Product transformToEntity(ProductDto productDto) {
      return mapper.map(productDto, Product.class);
   }

   @Override
   public ProductDto transformToDto(Product product) {
      return mapper.map(product, ProductDto.class);
   }
}
