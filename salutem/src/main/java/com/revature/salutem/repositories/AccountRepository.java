package com.revature.salutem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.salutem.models.Account;

public interface AccountRepository extends JpaRepository<Account, Integer> {
	public Account findAccountByUsername(String username);
	public Account findAccountByaccountId(int id);
	public Account findAccountByUsernameAndKey(String username, String key);
}
