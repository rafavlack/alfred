package com.srn.alfred.controller;

import com.srn.alfred.domain.Customer;
import com.srn.alfred.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/customerZone")
public class CustomerController {

   @Autowired
   private CustomerService customerService;

   @PostMapping("/activate")
   public ResponseEntity<Customer> createNew(@RequestBody Customer customer) {
      return new ResponseEntity<>(customerService.createCustomer(customer), HttpStatus.CREATED);
   }
}
