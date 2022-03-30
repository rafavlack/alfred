package com.srn.alfred.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

@Entity
@Table
@Data
public class Product {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @Column
   @NotBlank(message = "The product must belong to a category.")
   private String category;

   @Column
   @NotBlank(message = "The product must have a name.")
   private String name;

   @Embedded
   @Valid
   private ProductDetails productDetails;
}
