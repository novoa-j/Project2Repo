import { Component, OnInit } from '@angular/core';
import { HealthResultService } from '../services/health-result.service';
import { TokenForm } from '../token';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
  }

  // isClicked: boolean = false;

  // token: TokenForm;

  // tokenString: string = "";

  // // save the token into something
  // theToken = this.getTheToken1();

  // getTheToken1(): any{
  //   this.changeClicked();
  //   this.healthResultService.getTokenJSON().subscribe(
  //     (data) => {
  //       (this.token = data)
  //       this.tokenString = "" + this.token.Token;
  //       console.log(this.tokenString);
  //     }
  //   );
  // }

  // changeClicked(){
  //   this.isClicked = !this.isClicked;
  // }

}