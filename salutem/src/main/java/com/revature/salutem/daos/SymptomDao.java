package com.revature.salutem.daos;

import java.sql.Date;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.revature.salutem.models.Symptom;

@Repository
public interface SymptomDao {
	
	public List<Symptom> SymptomsByUser(int id);
	public List<Symptom> RecentSymptomByUser(int id, String when);
	public int createSymptom(Symptom s);
	public int updateSymptom(Symptom s);
	public void mergeSymptom(Symptom s);
	public Symptom getSymptom(int id);
	public int deleteSymptom(int id);
}
