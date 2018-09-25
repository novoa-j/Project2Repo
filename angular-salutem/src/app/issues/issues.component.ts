import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { HealthResultService } from '../services/health-result.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
  }

  isClicked: boolean = false;

  issues: Issue[] = [];

  getIssues(){
    this.changeClicked();
    this.healthResultService.loadIssues().subscribe((allIssues) => {this.issues = allIssues});
  }

  changeClicked(){
    this.isClicked = !this.isClicked;
  }

}
