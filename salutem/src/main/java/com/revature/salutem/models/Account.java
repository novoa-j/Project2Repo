package com.revature.salutem.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table
public class Account {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="accountSequence")
	@SequenceGenerator(name="accountSequence",allocationSize=1,sequenceName="SQ_ACC_PK")
	@Column(name="ACCOUNT_ID")
	private int accountId;
	@Column(name="USERNAME")
	private String username;
	@Column(name="ACC_KEY")
	private String key;
	@OneToMany(fetch=FetchType.EAGER)
	@JoinColumn(name="ACC_ID")
	private List<Submission> pastSubmission;
	public Account() {
		super();
	}
	public Account(int accountId, String username, String key, List<Submission> pastSubmission) {
		super();
		this.accountId = accountId;
		this.username = username;
		this.key = key;
		this.pastSubmission = pastSubmission;
	}
	public Account(String username, String key) {
		super();
		this.accountId = 0;
		this.username = username;
		this.key = key;
		this.pastSubmission = new ArrayList<>();
	}
	public int getAccountId() {
		return accountId;
	}
	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public List<Submission> getPastSymptoms() {
		return pastSubmission;
	}
	public void setPastSymptoms(List<Submission> pastSymptoms) {
		this.pastSubmission = pastSymptoms;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + accountId;
		result = prime * result + ((key == null) ? 0 : key.hashCode());
		result = prime * result + ((pastSubmission == null) ? 0 : pastSubmission.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
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
		Account other = (Account) obj;
		if (accountId != other.accountId)
			return false;
		if (key == null) {
			if (other.key != null)
				return false;
		} else if (!key.equals(other.key))
			return false;
		if (pastSubmission == null) {
			if (other.pastSubmission != null)
				return false;
		} else if (!pastSubmission.equals(other.pastSubmission))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Account [accountId=" + accountId + ", username=" + username + ", key=" + key + ", pastSymptoms="
				+ pastSubmission + "]";
	}
	
	
}
