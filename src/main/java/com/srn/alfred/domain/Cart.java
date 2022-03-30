package com.srn.alfred.domain;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.*;

@Entity
@Table(name = "CART")
@Data
public class Cart {

   @Column
   @Id
   @GeneratedValue(generator = "system-uuid")
   private UUID id;

   @ManyToOne(fetch = FetchType.LAZY)
   private Customer customer;

   @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
   @JoinColumn(name = "items")
   private Set<Item> itemsInCart = new HashSet<>();

   @Column
   private BigDecimal cartValue;

   @Column
   private Status cartStatus;

   public void addItem(Item item) {
      itemsInCart.add(item);
   }

   public void removeItem(Item item) {
      itemsInCart.remove(item);
   }
}
