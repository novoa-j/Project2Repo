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
	
//	@Column(name="SYMP_DATE")
	@Transient
	private Calendar dateIssued=Calendar.getInstance();
	
	@Column
	private String stringDate =dateIssued.getTime().toString();
	
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
	public Calendar getDateIssued() {
		return dateIssued;
	}
	public void setDateIssued(Calendar dateIssued) {
		this.dateIssued = dateIssued;
	}

	public Symptom() {
		super();
	}
	public Symptom(int id, String symptomName, Calendar dateIssued) {
		super();
		this.id = id;
		this.symptomName = symptomName;
		this.dateIssued = dateIssued;
	}
	public Symptom(String symptomName, Calendar dateIssued) {
		super();
		this.id = 0;
		this.symptomName = symptomName;
		this.dateIssued = dateIssued;
	}
	
	public Symptom(String symptomName, String dateString) {
		super();
		this.id = 0;
		this.symptomName = symptomName;
		this.stringDate = dateString;
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
		result = prime * result + ((dateIssued == null) ? 0 : dateIssued.hashCode());
		result = prime * result + id;
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
		if (dateIssued == null) {
			if (other.dateIssued != null)
				return false;
		} else if (!dateIssued.equals(other.dateIssued))
			return false;
		if (id != other.id)
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
		return "Symptom [id=" + id + ", symptomName=" + symptomName + ", dateIssued=" + dateIssued + "]";
	}
	
}