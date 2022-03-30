package com.srn.alfred.service.impl;

import com.srn.alfred.domain.Customer;
import com.srn.alfred.repository.CustomerRepository;
import com.srn.alfred.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {

   @Autowired
   private CustomerRepository customerRepository;

   public CustomerServiceImpl(CustomerRepository customerRepository) {
      this.customerRepository = customerRepository;
   }

   @Override
   public Customer createCustomer(Customer customer) {
   
      return customerRepository.save(customer);
   }

   @Override
   public Customer findById(Long id) {
      return customerRepository.getById(id);
   }
}
