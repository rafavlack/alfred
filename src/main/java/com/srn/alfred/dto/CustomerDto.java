package com.srn.alfred.dto;

import com.srn.alfred.domain.Address;
import lombok.Data;

import java.io.Serializable;

@Data
public class CustomerDto implements Serializable {
    private final Long id_customer;
    private final String name;
    private final String registrationNumber;
    private final String email;
    private final String phoneNumber;
    private final String username;
    private final String password;
    private final Address address;
    private final boolean isActive;
}
