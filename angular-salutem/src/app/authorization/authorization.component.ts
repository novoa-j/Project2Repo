import { Component, OnInit } from '@angular/core';
import { HealthResultService } from '../services/health-result.service';
import { TokenForm } from '../token';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
  }

  token: TokenForm;

  // getTheToken(){
  //   //this.healthResultService.getToken().subscribe((alltokens) => {this.token = alltokens});
  //   this.healthResultService.getToken().subscribe((alltokens) => {this.token = alltokens});
  // }  

}
