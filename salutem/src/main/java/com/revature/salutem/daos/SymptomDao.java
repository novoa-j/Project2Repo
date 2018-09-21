package com.revature.salutem.daos;

import java.sql.Date;
import java.util.List;

import com.revature.salutem.models.Symptom;

public interface SymptomDao {
	
	public List<Symptom> SymptomsByUser(int id);
	public List<Symptom> RecentSymptomByUser(int id, Date when);
	public int createSymptom(Symptom s);
	public int createSymptom(String name, Date dateIssued);
	public int createSymptoms(Symptom s);
	public int updateSymptom(Symptom s);
	public void mergeSymptom(Symptom s);
	public Symptom getSymptom(int id);
	public int deleteSymptom(int id);
}
