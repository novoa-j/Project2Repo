package com.revature.salutem.daos;

import java.util.List;

import com.revature.salutem.models.Account;
import com.revature.salutem.models.Symptom;

public interface AccountDao {

	public int createAccount( String username, String key);
	public int deleteAccountById(int id);
	public List<Account> getAllAccounts();
	public Account	getAccountById(int id);
	public int updateAccountById(int id, String username, String key);
	public int addSymptomToAccountById(int id, Symptom sym);	
	
}
