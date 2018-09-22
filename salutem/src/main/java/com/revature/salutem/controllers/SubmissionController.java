package com.revature.salutem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.salutem.services.SubmissionDaoImpl;

@RestController
@RequestMapping("/submissions")
public class SubmissionController {

	@Autowired
	SubmissionDaoImpl dubServ;
}
