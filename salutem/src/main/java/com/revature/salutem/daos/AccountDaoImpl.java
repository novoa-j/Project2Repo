package com.revature.salutem.daos;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.salutem.models.Account;
import com.revature.salutem.util.HibernateUtil;

public class AccountDaoImpl implements AccountDao {

	@Override
	public int createAccount(String username, String key) {
		Account a= new Account();
//		a.setAccountId(accountId);
		a.setKey(key);
		a.setUsername(username);
		Session s= HibernateUtil.getSession();
		Transaction tx= s.beginTransaction();
		int aPK=(int) s.save(a);
		tx.commit();
		s.close();
		return aPK;
	}

	@Override
	public int deleteAccountById(int id) {
		int result=0;
		Session s= HibernateUtil.getSession();
		Transaction tx= s.beginTransaction();
		Account a= (Account) s.get(Account.class, id);
		if(a != null) {
			s.delete(a);
			result=1;
		}
		tx.commit();
		s.close();
		return result;
	}

	@Override
	public List<Account> getAllAccounts() {
		Session s=HibernateUtil.getSession();
		String hql="from Account";
		Query q= s.createQuery(hql);
		List<Account> accounts=q.list();
		s.close();
		
		return accounts;
	}

	@Override
	public Account getAccountById(int id) {
		Session s = HibernateUtil.getSession();
		Account a=(Account) s.load(Account.class, id);
		s.close();
		return a;
	}

	@Override
	public int updateAccountById(int id, String username, String key) {
		Session s = HibernateUtil.getSession();
		Transaction tx = s.beginTransaction();
		Account a=(Account) s.load(Account.class, id);
		if(!username.equals("")) {
			a.setUsername(username);
		}
		if(!key.equals("")) {
			a.setKey(key);
		}
		int result = ((Account) s.merge(a)).getAccountId();
		tx.commit();
		s.close();
		return result;
	}
	
	

}
