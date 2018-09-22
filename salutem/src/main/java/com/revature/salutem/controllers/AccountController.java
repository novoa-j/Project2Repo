package com.revature.salutem.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.salutem.models.Account;
import com.revature.salutem.services.AccountDaoImpl;

@RestController
@RequestMapping("/accounts")
public class AccountController {

	@Autowired
	AccountDaoImpl accServ;
	
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Account> getAllAccounts(){
		return accServ.getAllAccounts();
	}
}
