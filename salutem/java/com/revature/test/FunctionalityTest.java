package com.revature.test;

import static org.junit.Assert.*;

import java.sql.Date;

import org.apache.log4j.Logger;
import org.hibernate.Session;

import com.revature.salutem.daos.SymptomDao;
import com.revature.salutem.models.Symptom;
import com.revature.salutem.util.HibernateUtil;
public class FunctionalityTest {
	private static Logger log = Logger.getRootLogger();
	
	@Test
	public void validateDBBackground() {
		Session s = HibernateUtil.getSession();
		s.close();
		assertTrue(true);
	}
	
	@Test
	public void createDeleteSymptom() {
		SymptomDao sd = new SymptomDaoImpl();
		Symptom s = new Symptom("Test Symptom", Date.valueOf("2018-05-05"));
		int id = sd.createSymptoms(s);
		s.setId(id);
		assertNotEquals(0, id);
		sd.deleteSymptom(id);
	}
}
