package com.srn.alfred.Utils;

import java.math.BigDecimal;

public class Utils {

   public static BigDecimal calculateValue(BigDecimal price, int quantity) {

      return price.multiply(BigDecimal.valueOf(quantity));
   }
}
