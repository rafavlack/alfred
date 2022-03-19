package com.srn.alfred.domain;

import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Embeddable
@Data
public class ProductDetails {

   @Embedded
   private Specs unitSpecs;

   private int unitsPerSet;

   @NotNull(message = "The product needs to have a price.")
   private BigDecimal unitPrice;

   private int unitStock;
}
