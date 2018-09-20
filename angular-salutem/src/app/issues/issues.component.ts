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

  issues: Issue[] = [];

  getIssues(){
    this.healthResultService.loadIssues().subscribe((allIssues) => {this.issues = allIssues});
  }

}
