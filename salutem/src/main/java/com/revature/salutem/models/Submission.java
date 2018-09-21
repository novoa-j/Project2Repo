package com.revature.salutem.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table
public class Submission {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="submissionSequence")
	@SequenceGenerator(name="submissionSequence",allocationSize=1,sequenceName="SQ_SUB_PK")
	@Column(name="SUB_ID")
	private int id;
	@Column (name="ACCOUNT_ID")
	private int accountId;
	@Column
	private int symptomId;
	@Transient
	private Date subDate;
	@Column
	private String dateString=subDate.toString();
	
	public Submission(int accountId, int symptomId, Date subDate) {
		super();
		this.accountId = accountId;
		this.symptomId = symptomId;
		this.subDate = subDate;
//		this.dateString = dateString;
	}
	public Submission() {
		super();
		// TODO Auto-generated constructor stub
	}
<<<<<<< HEAD
	public int getAccountId() {
		return accountId;
	}
	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}
	public int getSymptomId() {
		return symptomId;
	}
	public void setSymptomId(int symptomId) {
		this.symptomId = symptomId;
	}
	public Date getSubDate() {
		return subDate;
	}
	public void setSubDate(Date subDate) {
		this.subDate = subDate;
	}
	public String getDateString() {
		return dateString;
	}
	public void setDateString(String dateString) {
		this.dateString = dateString;
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
