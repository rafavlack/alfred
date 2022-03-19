package com.srn.alfred.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
@NoArgsConstructor
@Getter
@ToString
public class Customer {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @Column
   private String name;

   @Column
   private String registrationNumber;

   @Column
   private String email;

   @Column
   private String phoneNumber;

   @Column
   private String username;

   @Column
   private String password;

   @Embedded
   private Address address;

   @Column
   private boolean isActive;

   private Customer(CustomerBuilder builder) {
      this.id = builder.id;
      this.name = builder.name;
      this.registrationNumber = builder.registrationNumber;
      this.email = builder.email;
      this.phoneNumber = builder.phoneNumber;
      this.username = builder.username;
      this.password = builder.password;
      this.address = builder.address;
      this.isActive = builder.isActive;
   }

   public static class CustomerBuilder {
      private Long id;

      private String name;

      private String registrationNumber;

      private String email;

      private String phoneNumber;

      private final String username;

      private String password;

      private Address address;

      private boolean isActive;



      public CustomerBuilder(Long id, String username, String password) {
         this.id = id;
         this.username = username;
         this.password = password;
      }

      public CustomerBuilder name(String name) {
         this.name = name;
         return this;
      }

      public CustomerBuilder registrationNumber(String registrationNumber) {
         this.registrationNumber = registrationNumber;
         return this;
      }

      public CustomerBuilder email(String email) {
         this.email = email;
         return this;
      }

      public CustomerBuilder phoneNumber(String phoneNumber) {
         this.phoneNumber = phoneNumber;
         return this;
      }

      public CustomerBuilder address(Address address) {
         this.address = address;
         return this;
      }

      public CustomerBuilder isActive(boolean isActive) {
         this.isActive = isActive;
         return this;
      }

      public Customer build() {
         return new Customer(this);
      }
   }
}
