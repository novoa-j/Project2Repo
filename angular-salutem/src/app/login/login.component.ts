import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'; // do not use selenium import!
import { HealthResultService } from '../services/health-result.service';
import { TokenForm } from '../token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private healthResultService: HealthResultService) { }

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
  sendCreateAccount(): Observable<Account>{
    let accepted = this.http.post<Account>('http://salutem.us-east-2.elasticbeanstalk.com/accounts',
      JSON.parse(`{"username":"${this.createUser}","key":"${this.createPass}"}`), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })

      }); // no error handling rn
    return accepted;
  }

  grabAccount(): Observable<Account>{
    let accepted = this.http.post<Account>('http://salutem.us-east-2.elasticbeanstalk.com/accounts/grab',
      JSON.parse(`{"username":"${this.user}","key":"${this.key}"}`), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })

      }); // no error handling rn
    return accepted;
  }

  // localStorage cannot hold boolean values, so convert to string
  convertToStringForStorage(data: boolean): string {
    if (data) {
      this.allowAccess = true;

      // set the auth token in localStorage for session (DO THIS AFTER YOU VALIDATE THAT THEY CAN SIGN IN PROPERLY)
      localStorage.setItem("CurrentUser", this.user);

      let token: TokenForm;
      let tokenString: string;

      this.healthResultService.getTokenJSON()
      .subscribe(
        (data) => {
          (token = data)
          tokenString = data.Token;
          localStorage.setItem("CurrentUserToken", data.Token);
        }
      );
  
      tokenString = localStorage.getItem("CurrentUserToken").toString();

      return "true";
    } else {
      this.allowAccess = false;
      return "false";
    }
  }
  convertAccountToString(account:Account): string{
    let stringAccount;
    var thisAccount: any=account;
    // thisAccount.pastSymptoms.forEach(number => {
    // });
    stringAccount=`${thisAccount.accountId}`+ thisAccount.username+thisAccount.key;
    return stringAccount;
  }

  checkLogin(){
    this.sendLogin() //change this to grab account 
    .subscribe(
      data => {
        if (data) {
          alert("YOU SIGNED IN YAY!")

          var signedInAcct: any=this.grabAccount(); //try subscribing and getting info then
          console.log()
          localStorage.setItem("AccountId",signedInAcct.accountId);
          localStorage.setItem("AccountId", signedInAcct.username);
          localStorage.setItem("AccountId", signedInAcct.key);

          localStorage.setItem("isValidLogin", this.convertToStringForStorage(data));
          // console.log("this is the item: " + localStorage.getItem("isValidLogin"));
          // localStorage.setItem("AccountName", `${this.user}`);
          // localStorage.setItem("AcountPassword",`${this.key}`);
        }
        else {
          localStorage.setItem("isValidLogin", this.convertToStringForStorage(data));
          document.getElementById("incorrectUserKeyCombo").removeAttribute("hidden");
          // console.log("this is the item: " + localStorage.getItem("isValidLogin"));
        }
      }
    );
  }

newAccount(){
  this.sendCreateAccount()
    .subscribe(
      data => {

        // let account: Account;
        var account: any=data;
        
        if (data) {
        // let strAccount=this.convertAccountToString(account);
          localStorage.setItem("AccountId",`${account.accountId}`)
          localStorage.setItem("AccountName", account.username);
          localStorage .setItem("AcountPassword",account.key);
          // localStorage.setItem("Account", strAccount);
          
        }
      }
    );
}

}
