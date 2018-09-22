package com.revature.salutem.models;

import java.sql.Date;
import java.util.Calendar;

import javax.persistence.*;

@Entity
@Table
public class Symptom {
	
	//include a date property
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="symptomSequence")
	@SequenceGenerator(name="symptomSequence",allocationSize=1,sequenceName="SQ_SYMPT_PK")
	@Column(name="SYMPTOM_ID")
	private int id; 
	@Column(name="NAME")
	private String symptomName;
	@Column
	private String stringDate;
	public Symptom() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Symptom(int id, String symptomName, String stringDate) {
		super();
		this.id = id;
		this.symptomName = symptomName;
		this.stringDate = stringDate;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSymptomName() {
		return symptomName;
	}
	public void setSymptomName(String symptomName) {
		this.symptomName = symptomName;
	}
	public String getStringDate() {
		return stringDate;
	}
	public void setStringDate(String stringDate) {
		this.stringDate = stringDate;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((stringDate == null) ? 0 : stringDate.hashCode());
		result = prime * result + ((symptomName == null) ? 0 : symptomName.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Symptom other = (Symptom) obj;
		if (id != other.id)
			return false;
		if (stringDate == null) {
			if (other.stringDate != null)
				return false;
		} else if (!stringDate.equals(other.stringDate))
			return false;
		if (symptomName == null) {
			if (other.symptomName != null)
				return false;
		} else if (!symptomName.equals(other.symptomName))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Symptom [id=" + id + ", symptomName=" + symptomName + ", stringDate=" + stringDate + "]";
	}
	
}
