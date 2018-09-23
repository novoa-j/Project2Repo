package com.revature.salutem.repositories;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.salutem.models.Submission;

public interface SubmissionRepository extends JpaRepository<Submission, Integer>{
	public List<Submission> findSubmissionByAccountId(int id);
	public List<Submission> findSubmissionByAccountIdAndSubmissionDate(int id, Date when);
	public void deleteSubmissionsByAccountIdAndSubmissionDate(int id, Date day);
}
