package com.revature.salutem.models;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;


public class Diagnosis {
	
//	@Column(name="ISSUE")
	private Issue iss;
//	@ManyToOne
//	@JoinColumn(name="SPECIALIZATION_ID")
	List<Specialization> specialization = new ArrayList<>();
	
	public Diagnosis() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Diagnosis(Issue iss, List<Specialization> specialization) {
		super();
		this.iss = iss;
		this.specialization = specialization;
	}
	public Issue getIss() {
		return iss;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((iss == null) ? 0 : iss.hashCode());
		result = prime * result + ((specialization == null) ? 0 : specialization.hashCode());
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
		Diagnosis other = (Diagnosis) obj;
		if (iss == null) {
			if (other.iss != null)
				return false;
		} else if (!iss.equals(other.iss))
			return false;
		if (specialization == null) {
			if (other.specialization != null)
				return false;
		} else if (!specialization.equals(other.specialization))
			return false;
		return true;
	}
	public void setIss(Issue iss) {
		this.iss = iss;
	}
	public List<Specialization> getSpecialization() {
		return specialization;
	}
	public void setSpecialization(List<Specialization> specialization) {
		this.specialization = specialization;
	}
	@Override
	public String toString() {
		return "Diagnosis [iss=" + iss + ", specialization=" + specialization + "]";
	}
	
	
	
}
