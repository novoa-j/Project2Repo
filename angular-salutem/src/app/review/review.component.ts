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
    // document.getElementById("navBody").setAttribute("disabled","");
    // document.getElementById("navIssues").setAttribute("disabled","");
    // document.getElementById("navIssue").setAttribute("disabled","");
    // document.getElementById("navPropos").setAttribute("disabled","");
    // document.getElementById("navSpec").setAttribute("disabled","");
    // document.getElementById("navDiagnosis").setAttribute("disabled","");
  }
  ngAfterViewInit(){
    let issueIds = document.getElementsByClassName("divIssues");
    if (issueIds.length)
      for (let i = 0; i < issueIds.length; i++)
        this.fetchIssue(+issueIds[i].children[2].id);
    else 
      document.getElementsByClassName("jumbotron")[0].innerHTML = "<h3>No previous symptoms to show.</h3>"
  }

  populateReviews(){
    let jsonString = JSON.parse(localStorage.getItem("signedInAccount"));
    this.issues = jsonString.pastSymptoms;
  }

  fetchIssue(issueId: number){
    this.healthResultService.loadIssue(issueId).subscribe(
      (data) => {
        let info = document.getElementById("" + issueId);
        let name = document.getElementById("name-" + issueId)
        info.innerHTML = JSON.stringify(data.DescriptionShort);
        name.innerHTML = JSON.stringify(data.Name).replace(/"/g,"");
        console.log("issue data:  " + data);
      }
    );
  }

}
