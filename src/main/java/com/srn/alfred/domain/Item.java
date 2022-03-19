package com.srn.alfred.domain;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
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
   private String itemName;

   @ManyToOne(fetch = FetchType.LAZY)
   private Cart cart;

   @Column
   private int itemQuantity;

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

   public String getItemName() {
      return itemName;
   }

   public void setItemName(String itemName) {
      this.itemName = itemName;
   }

   public Cart getCart() {
      return cart;
   }

   public void setCart(Cart cart) {
      this.cart = cart;
   }

   public int getItemQuantity() {
      return itemQuantity;
   }

   public void setItemQuantity(int itemQuantity) {
      this.itemQuantity = itemQuantity;
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
