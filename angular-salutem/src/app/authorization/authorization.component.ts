import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    // uri = "https://authservice.priaid.ch/login";
    // secret_key = "cindy221";
    // computedHash = CryptoJS.HmacMD5(uri, secret_key);
    // computedHashString = computedHash.toString(CryptoJS.enc.Base64);
    
    // console.log(computedHashString); // J9J5D9T+WJ5vfyrb0TIYtg==
    // console.log(computedHash);

}
