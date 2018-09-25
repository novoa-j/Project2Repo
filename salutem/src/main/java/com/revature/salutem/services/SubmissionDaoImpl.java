package com.revature.salutem.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.salutem.models.Account;
import com.revature.salutem.models.Submission;
import com.revature.salutem.repositories.SubmissionRepository;

@Service
public class SubmissionDaoImpl implements SubmissionDao{
	
	@Autowired
	SubmissionRepository subRepo;

	@Override
	public List<Submission> allSubmissions() {
		return subRepo.findAll();
	}

	@Override
	public List<Submission> getSubmissionsByUser(int id) {
		return subRepo.findSubmissionByAccountId(id);
	}

	@Override
	public List<Submission> getSubmissionByUserAndDate(int id, Date when) {
		return subRepo.findSubmissionByAccountIdAndSubmissionDate(id, when);
	}

	@Override
	public Submission getSubmission(int id) {
		return subRepo.getOne(id);
	}

	@Override
	public Submission createSubmission(Submission s) {
		return subRepo.save(s);
	}

	@Override
	public Submission updateSubmission(Submission s) {
		return subRepo.save(s);
	}

	@Override
	public void deleteSubmission(Submission s) {
		subRepo.delete(s);
	}

	@Override
	public void deleteSubmissionById(int id) {
		Submission s = new Submission();
		s.setId(id);
		subRepo.delete(s);
	}

	@Override
	public void deleteSubmissionsByDateAndAccountId(Account acc, Date day) {
		subRepo.deleteSubmissionsByAccountIdAndSubmissionDate(acc.getAccountId(), day);
	} 
}
