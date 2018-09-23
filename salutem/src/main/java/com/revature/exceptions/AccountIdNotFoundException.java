package com.revature.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus (value=HttpStatus.NOT_FOUND, reason="There is not account associated with that id")
public class AccountIdNotFoundException extends RuntimeException{
	
	public AccountIdNotFoundException () {
		super();
	}
}
