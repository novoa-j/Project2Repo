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
  }

  issue: Issue2;

  selectedId: number;

  // onSelect(id: number): void {
  //   this.selectedId = id;
  // }

  // getIssue(){
  //   this.healthResultService.loadIssue(1);
  // }
  

}
