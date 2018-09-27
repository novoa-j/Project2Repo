import { Component, OnInit } from '@angular/core';
import { HealthResultService } from '../services/health-result.service';
import { Symptom } from '../symptom';

@Component({
  selector: 'app-proposed-symptoms',
  templateUrl: './proposed-symptoms.component.html',
  styleUrls: ['./proposed-symptoms.component.css']
})
export class ProposedSymptomsComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
    document.getElementById("navDiagnosis").setAttribute("disabled","");
  }

  isClicked: boolean = false;

  proposedSymptoms: Symptom[] = [];

  id: number;
  gender: string;
  age: number;

  getProposedSymptoms(){
    this.changeClicked();
    this.healthResultService.loadProposedSymptoms(this.id, this.gender, this.age).subscribe((allProposedSymptoms) => {this.proposedSymptoms = allProposedSymptoms});
  }

  changeClicked(){
    this.isClicked = !this.isClicked;
  }

}
