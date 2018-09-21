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
	

	
	
}
