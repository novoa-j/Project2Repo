package com.revature.salutem.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="SUBMISSION")
public class Submission {

	@Column(name="USER_ID")
	private int userId;
	
	@Column(name="SYMPTOM_ID")
	private int symptomId;
	
	@Column(name="SUBMISSION_DAY")
	private Date submitDate;

	public Submission(int userId, int symptomId, Date submitDate) {
		super();
		this.userId = userId;
		this.symptomId = symptomId;
		this.submitDate = submitDate;
	}

	public Submission() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getSymptomId() {
		return symptomId;
	}

	public void setSymptomId(int symptomId) {
		this.symptomId = symptomId;
	}

	public Date getSubmitDate() {
		return submitDate;
	}

	public void setSubmitDate(Date submitDate) {
		this.submitDate = submitDate;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((submitDate == null) ? 0 : submitDate.hashCode());
		result = prime * result + symptomId;
		result = prime * result + userId;
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
		Submission other = (Submission) obj;
		if (submitDate == null) {
			if (other.submitDate != null)
				return false;
		} else if (!submitDate.equals(other.submitDate))
			return false;
		if (symptomId != other.symptomId)
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Submission [userId=" + userId + ", symptomId=" + symptomId + ", submitDate=" + submitDate + "]";
	}
	
}
