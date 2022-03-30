package com.srn.alfred.domain;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Item {

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Integer id;

   @Column
   private String name;

   @ManyToOne(fetch = FetchType.LAZY)
   private Cart cart;

   @Column
   private int quantity;

   @Column
   private BigDecimal unitPrice;

   @Column
   private BigDecimal lineValue;

   public Integer getId() {
      return id;
   }

   public void setItemId(Integer id) {
      this.id = id;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public Cart getCart() {
      return cart;
   }

   public void setCart(Cart cart) {
      this.cart = cart;
   }

   public int getQuantity() {
      return quantity;
   }

   public void setQuantity(int quantity) {
      this.quantity = quantity;
   }

   public BigDecimal getUnitPrice() {
      return unitPrice;
   }

   public void setUnitPrice(BigDecimal unitPrice) {
      this.unitPrice = unitPrice;
   }

   public BigDecimal getLineValue() {
      return lineValue;
   }

   public void setLineValue(BigDecimal lineValue) {
      this.lineValue = lineValue;
   }
}
