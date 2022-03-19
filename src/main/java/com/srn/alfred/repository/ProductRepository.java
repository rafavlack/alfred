package com.srn.alfred.repository;

import com.srn.alfred.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

   boolean existsByName (String name);
}
