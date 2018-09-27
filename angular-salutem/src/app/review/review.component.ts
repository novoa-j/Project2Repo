import { Component, OnInit } from '@angular/core';
import { HealthResultService } from '../services/health-result.service';
import { Issue2 } from '../issue';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  issues: any[];

  ngOnInit() {
    this.populateReviews();
    document.getElementById("navBody").setAttribute("disabled","");
    document.getElementById("navIssues").setAttribute("disabled","");
    document.getElementById("navIssue").setAttribute("disabled","");
    document.getElementById("navPropos").setAttribute("disabled","");
    document.getElementById("navSpec").setAttribute("disabled","");
    document.getElementById("navDiagnosis").setAttribute("disabled","");
  }

  populateReviews(){
    let jayjay = JSON.parse(localStorage.getItem("signedInAccount"));
    this.issues = jayjay.pastSymptoms;
    // for (let iss of this.issues)
    //   this.fetchIssue(iss.);
  }

  fetchIssue(issueId: number){
    this.healthResultService.loadIssue(issueId).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
