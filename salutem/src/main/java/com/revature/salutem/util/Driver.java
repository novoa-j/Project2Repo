package com.revature.salutem.util;

import java.sql.Date;
import java.util.Calendar;
//import java.util.Date;

import org.hibernate.Session;

import com.revature.salutem.daos.AccountDao;
import com.revature.salutem.daos.AccountDaoImpl;
import com.revature.salutem.daos.SymptomDao;
import com.revature.salutem.daos.SymptomDaoImpl;
import com.revature.salutem.models.Symptom;

public class Driver {

	public static void main(String[] args) {
		Session s = HibernateUtil.getSession();
		s.close();
		
		AccountDao ad= new AccountDaoImpl();
//		ad.createAccount("testname", "pass123");
//		ad.createAccount("tester", "pass124");
//		ad.createAccount("tom", "cruise");
//		ad.deleteAccountById(3);
//		System.out.println(ad.getAllAccounts());
//		ad.getAccountById(2);
//		ad.updateAccountById(2, "", "newpass");
		SymptomDao smpD= new SymptomDaoImpl();
//		@SuppressWarnings("deprecation")
//		Date now=Date.valueOf("2018-1-25");
//		System.out.println(now);
		
//		Calendar cal = Calendar.getInstance();
//		System.out.println( cal.getTime().toString());
//		
		Symptom sym = new Symptom();
		sym.setSymptomName("the Plague");
		sym.setStringDate(Date.valueOf("2018-12-25").toString());
//		smpD.createSymptom(sym);
		ad.addSymptomToAccountById(3, sym);
//		smpD.deleteSymptom(1);
		
 		
		
	}
}
