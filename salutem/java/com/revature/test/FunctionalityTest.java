package com.revature.test;

import static org.junit.Assert.*;

import org.apache.log4j.Logger;
import org.hibernate.Session;

import com.revature.salutem.util.HibernateUtil;
public class FunctionalityTest {
	private static Logger log = Logger.getRootLogger();
	
	@Test
	public void validateDBBackground() {
		Session s = HibernateUtil.getSession();
		s.close();
		assertTrue(true);
	}
}
