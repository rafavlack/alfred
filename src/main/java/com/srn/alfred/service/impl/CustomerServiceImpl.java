<<<<<<< .merge_file_a01192
package com.srn.alfred.service.impl;

import com.srn.alfred.domain.Customer;
import com.srn.alfred.repository.CustomerRepository;
import com.srn.alfred.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public List<Customer> findAllCustomer() {
        return customerRepository.findAll();
    }
}
=======
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
>>>>>>> .merge_file_a08208
