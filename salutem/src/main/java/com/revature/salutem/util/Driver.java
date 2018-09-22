package com.revature.salutem.util;

import org.hibernate.Session;

import com.revature.salutem.services.AccountDao;
import com.revature.salutem.services.AccountDaoImpl;

public class Driver {

	public static void main(String[] args) {
//		Session s = HibernateUtil.getSession();
//		s.close();
		
		AccountDao ad= new AccountDaoImpl();
//		ad.createAccount("testname", "pass123");
//		ad.createAccount("tester", "pass124");
//		ad.createAccount("tom", "cruise");
//		ad.deleteAccountById(1);
//		System.out.println(ad.getAllAccounts());
//		ad.getAccountById(2);
//		ad.updateAccountById(2, "", "newpass");
	}
}
