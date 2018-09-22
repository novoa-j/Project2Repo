package com.revature.salutem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.salutem.models.Account;

public interface AccountRepository extends JpaRepository<Account, Integer> {

}
