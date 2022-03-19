package com.srn.alfred.domain;

import lombok.Data;

import javax.persistence.Embeddable;
import java.math.BigDecimal;

@Embeddable
@Data
public class Specs {

   private BigDecimal width;

   private BigDecimal length;

   private BigDecimal height;

   private BigDecimal weight;
}
