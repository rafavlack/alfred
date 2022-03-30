package com.srn.alfred.domain;

import lombok.Data;

import javax.persistence.Embeddable;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;
import java.math.BigDecimal;

@Embeddable
@Data
public class ProductDetails {

   private String specs;

   private int unitsPerSet;

   @NotNull(message = "The product needs to have a price.")
   @Positive(message = "The price must be higher than zero.")
   private BigDecimal unitPrice;

   @PositiveOrZero(message = "The stock quantity must be zero or higher.")
   private int stock;
}
