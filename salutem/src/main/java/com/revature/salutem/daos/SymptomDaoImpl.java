package com.revature.salutem.daos;

import java.sql.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.revature.salutem.models.Account;
import com.revature.salutem.models.Symptom;
import com.revature.salutem.models.Symptom;
import com.revature.salutem.util.HibernateUtil;

//@Repository
public class SymptomDaoImpl implements SymptomDao{

	@Override
	public List<Symptom> SymptomsByUser(int id) {
		Session s = HibernateUtil.getSession();
		String hql = "from Symptom where id = :userId";///////////Check against joiner table?
		Query q = s.createQuery(hql);
		q.setInteger("userId", id);
		List<Symptom> symptoms = q.list();
		s.close();
		return symptoms;
	}

	@Override
	public List<Symptom> RecentSymptomByUser(int id, Date when) {
		Session s = HibernateUtil.getSession();
		String hql = "";//TODO Figure out  how to check each value
		Criteria c = s.createCriteria(Symptom.class);
		Query q = s.createQuery(hql);
		//where date < symptomDay
		List<Symptom> symptoms = q.list();
		s.close();
		return symptoms;
	}

	@Override
	public int createSymptom(Symptom s) {
		Session sess = HibernateUtil.getSession();
		Transaction tx = sess.beginTransaction();
		int key = (int) sess.save(s);
		tx.commit();
		sess.close();
		return key;
	}
	@Override 
	public int createSymptom(String name, Date dateIssued) {
//		Account a= new Account();
		Symptom symp= new Symptom();
//		a.setAccountId(accountId);
//		a.setKey(key);
//		a.setUsername(username);
		symp.setSymptomName(name);
//		symp.setDateIssued(dateIssued);
		Session s= HibernateUtil.getSession();
		Transaction tx= s.beginTransaction();
		int aPK=(int) s.save(symp);
		tx.commit();
		s.close();
		return aPK;
	}

	@Override
	public int updateSymptom(Symptom s) {
		Session sess = HibernateUtil.getSession();
		Transaction tx = sess.beginTransaction();
		int rowAltered;
		try {
			sess.update(s);
			rowAltered = 1;
		} catch(HibernateException e) {
			rowAltered = 0;
		}
		tx.commit();
		sess.close();
		return rowAltered;
	}

	@Override
	public void mergeSymptom(Symptom s) {
		Session sess = HibernateUtil.getSession();
		Transaction tx = sess.beginTransaction();
		sess.merge(s);
		tx.commit();
		sess.close();
	}

	@Override
	public Symptom getSymptom(int id) {
		Session s = HibernateUtil.getSession();
		Criteria c = s.createCriteria(Symptom.class);
		Criterion crit = Restrictions.eq("id", id);
		c.add(crit);
		Symptom symptom = null;
		if (c.list().size() > 0)
			symptom = (Symptom) c.list().get(0);
		return symptom;
	}

	@Override
	public int deleteSymptom(int id) {
		int result=0;
		Session s= HibernateUtil.getSession();
		Transaction tx= s.beginTransaction();
		Symptom a= (Symptom) s.get(Symptom.class, id);
		if(a != null) {
			s.delete(a);
			result=1;
		}
		tx.commit();
		s.close();
		return result;
	}

}

