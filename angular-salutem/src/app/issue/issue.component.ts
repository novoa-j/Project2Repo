import { Component, OnInit } from '@angular/core';
import { HealthResultService } from '../services/health-result.service';
import { Issue2 } from '../issue';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
    document.getElementById("navSpec").setAttribute("disabled","");
    document.getElementById("navDiagnosis").setAttribute("disabled","");
  }

  isClicked: boolean = false;
  issue: Issue2;
  issueId: number;

  getIssue(){
    this.changeClicked();
    this.healthResultService.loadIssue(this.issueId).subscribe(
      (data) => {
        (this.issue = data)
        console.log(this.issue);
      }
    );
  }

  changeClicked(){
    this.isClicked = !this.isClicked;
  }
}

