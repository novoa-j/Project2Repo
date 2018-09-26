import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'; // do not use selenium import!

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  user: string;
  key: string;
  createUser: string;
  createPass: string;

  allowAccess: boolean = false;

  sendLogin(): Observable<boolean> {
    let accepted = this.http.post<boolean>('http://salutem.us-east-2.elasticbeanstalk.com/accounts/login',
                     JSON.parse(`{"username":"${this.user}","key":"${this.key}"}`), {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json' 
      })

    }); // no error handling rn
    return accepted;
  }
  sendCreateAccount(): Observable<boolean>{
    let accepted = this.http.post<boolean>('http://salutem.us-east-2.elasticbeanstalk.com/accounts',
      JSON.parse(`{"username":"${this.createUser}","key":"${this.createPass}"}`), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })

      }); // no error handling rn
    return accepted;
  }

  convertToStringForStorage(data: boolean): string {
    if (data) {
      this.allowAccess = true;

      // set the auth token in localStorage for session (DO THIS AFTER YOU VALIDATE THAT THEY CAN SIGN IN PROPERLY)


      return "true";
    } else {
      this.allowAccess = false;
      return "false";
    }
  }

  checkLogin(){
    this.sendLogin()
    .subscribe(
      data => {
        if (data) {
          alert("YOU SIGNED IN YAY!")
          localStorage.setItem("isValidLogin", this.convertToStringForStorage(data));
          console.log("this is the item: " + localStorage.getItem("isValidLogin"));
        }
        else {
          localStorage.setItem("isValidLogin", this.convertToStringForStorage(data));
          document.getElementById("incorrectUserKeyCombo").removeAttribute("hidden");
          console.log("this is the item: " + localStorage.getItem("isValidLogin"));
        }
      }
    );
  }

newAccount(){
  this.sendCreateAccount()
    .subscribe(
      data => {
        if (data) {
          alert("YOU SIGNED IN YAY!")
          localStorage.setItem("isValidLogin", this.convertToStringForStorage(data));
          console.log("this is the item: " + localStorage.getItem("isValidLogin"));
        }
        else {
          localStorage.setItem("isValidLogin", this.convertToStringForStorage(data));
          document.getElementById("incorrectUserKeyCombo").removeAttribute("hidden");
          console.log("this is the item: " + localStorage.getItem("isValidLogin"));
        }
      }
    );
}

}
