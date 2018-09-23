package com.revature.salutem.services;

import java.sql.Date;
import java.util.List;

import com.revature.salutem.models.Account;
import com.revature.salutem.models.Submission;

public interface SubmissionDao {
	
	public List<Submission> allSubmissions();
	public List<Submission> getSubmissionsByUser(int id);
	public List<Submission> getSubmissionByUserAndDate(int id, Date when);
	public Submission getSubmission(int id);
	public Submission createSubmission(Submission s);
	public Submission updateSubmission(Submission s);
	public void deleteSubmission(Submission s);
	public void deleteSubmissionById(int id);
	public void deleteSubmissionsByDateAndAccountId(Account acc, Date day);
}
