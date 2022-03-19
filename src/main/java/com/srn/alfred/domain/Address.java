package com.srn.alfred.domain;

import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.Entity;

@Embeddable
@Data
public class Address {

   private String streetName;

   private String floorDetails;

   private String city;

   private String country;

   private String zipCode;
}
