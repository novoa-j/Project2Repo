package com.revature.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND, reason="There is not a submission associated with that id.")
public class SubmissionIdNotFoundException extends RuntimeException{

	public SubmissionIdNotFoundException() {
		super();
	}
}
