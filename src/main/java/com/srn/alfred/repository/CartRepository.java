package com.srn.alfred.repository;

import com.srn.alfred.domain.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CartRepository extends JpaRepository<Cart, UUID> {

   Cart findCartByCustomerId(Long id);

}
