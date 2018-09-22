import { Component, OnInit } from '@angular/core';
import { HealthResultService } from '../services/health-result.service';
import { TokenForm } from '../token';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
  }

  isClicked: boolean = false;

  token: TokenForm;

  // save the token into something
  theToken = this.getTheToken();

  getTheToken(): any{
    this.changeClicked();
    this.healthResultService.getToken1().subscribe(
      (data) => {
        (this.token = data)
        //console.log(this.token);
      }
    );
    //console.log(this.theToken);
  }

  changeClicked(){
    this.isClicked = !this.isClicked;
  }

}
