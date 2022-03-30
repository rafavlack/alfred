package com.srn.alfred.service;

import com.srn.alfred.domain.Customer;
import org.springframework.stereotype.Service;

@Service
public interface CustomerService {

   Customer createCustomer(Customer customer);

   Customer findById(Long id);


}
