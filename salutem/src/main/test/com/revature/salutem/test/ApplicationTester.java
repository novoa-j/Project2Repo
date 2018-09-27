package com.revature.salutem.test;

import static org.testng.Assert.assertNotNull;

import java.util.List;

import org.testng.annotations.Test;

import com.revature.salutem.models.Account;
import com.revature.salutem.services.AccountDao;
import com.revature.salutem.services.AccountDaoImpl;

public class ApplicationTester {
//	@Test(dependsOnMethods= {"test2"})
//	public void test() {
//		System.out.println("test one");
//		assertTrue(true);
//	}
//	
//	@Test
//	public void test2() {
//		System.out.println("test two");
//		assertFalse(false);
//	}
//	@Test(expectedExceptions= {NumberFormatException.class})
//	public void test3() {
//		throw new NumberFormatException();
//	}
	private int currentId;

	
//	@Test
//	public void grabAccount() {
//		Account acc = new Account(3,"bloop","beep", new ArrayList<Submission>());
//		AccountDao ad = new AccountDaoImpl();
//		System.out.println("TEST GRAB: " + acc);
//		Account res = ad.grabAccount(acc);
//		String[] arr = {acc.getUsername(),acc.getKey()};
//		String[] check = {res.getUsername(),res.getKey()};
//		assertEquals(arr,check);
//	}
//	@Test
//	public void getAll() {
//		AccountDao ad = new AccountDaoImpl();
//		List<Account> accounts = ad.getAllAccounts();
//		assertNotNull(accounts);
//	}
//	@Test
//	public void createAccount() {
//		Account acc = new Account("TestingUser","TestingKey");
//		AccountDao ad = new AccountDaoImpl();
//		
//		Account res = ad.createAccount(acc);
//		acc = ad.grabAccount(acc);
//		this.currentId = res.getAccountId();
//		//TODO grabAccount()
//		assertEquals("","");
//	}
//	
//	@Test(dependsOnMethods= {"createAccount"})
//	public void updateAccount() {
//		Account acc = new Account(this.currentId,"TestingUser","TestingKey",null);
//		AccountDao ad = new AccountDaoImpl();
//		
//		Account res = ad.createAccount(acc);
//		String[] arr = {acc.getUsername(),acc.getKey()};
//		String[] check = {acc.getUsername(),acc.getKey()};
//		assertEquals(arr,check);
//	}
	
}
