package com.revature.salutem.services;

import java.util.List;

import com.revature.salutem.models.Account;

public interface AccountDao {

	public Account createAccount(Account ac);
	public void deleteAccount(Account ac);
	public void deleteAccountById(int id);
	public List<Account> getAllAccounts();
	public Account getAccountById(int id);
	public Account updateAccount(Account ac);
	public Boolean verifyLogin(Account ac);
	public Account grabAccount(Account ac);
}
