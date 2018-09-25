package com.revature.salutem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.salutem.models.Account;
import com.revature.salutem.repositories.AccountRepository;

@Service
public class AccountDaoImpl implements AccountDao {

	@Autowired
	AccountRepository accRepo;

	@Override
	public Account createAccount(Account acc) {
		return accRepo.save(acc);
	}

	@Override
	public void deleteAccountById(int id) {
		Account acc = new Account();
		acc.setAccountId(id);
		accRepo.delete(acc);
	}

	@Override
	public void deleteAccount(Account acc) {
		accRepo.delete(acc);
	}

	@Override
	public List<Account> getAllAccounts() {
		return accRepo.findAll();
	}

	@Override
	public Account getAccountById(int id) {
		return accRepo.getOne(id);
	}

	@Override
	public Account updateAccount(Account acc) {
		return accRepo.save(acc);
	}
	
	@Override
	public Boolean verifyLogin(Account acc) {
		return accRepo.findAccountByUsernameAndKey(acc.getUsername(), acc.getKey()) != null;
	}
}
