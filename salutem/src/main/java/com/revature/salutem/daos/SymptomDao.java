package com.revature.salutem.daos;

import java.sql.Date;
import java.util.List;

import com.revature.salutem.models.Symptom;

public interface SymptomDao {
	
	public List<Symptom> SymptomsByUser(int id);
	public List<Symptom> RecentSymptomByUser(int id, Date when);
	public void createSymptons(Symptom s);
	public int deleteSymptom(int id);
	public int updateSymptom(Symptom s);
	
}
