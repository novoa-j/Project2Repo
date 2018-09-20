import { Component, OnInit } from '@angular/core';
import { BodySymptom } from '../symptom';
import { HealthResultService } from '../services/health-result.service';

@Component({
  selector: 'app-body-symptoms',
  templateUrl: './body-symptoms.component.html',
  styleUrls: ['./body-symptoms.component.css']
})
export class BodySymptomsComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
  }

  bodySymptoms: BodySymptom[] = [];
  id: number;
  gender: number;

  // getBodySymptoms(){
  //   this.healthResultService.loadBodySymptoms(this.value1, this.value2).subscribe((allBodySymptoms) => {this.bodySymptoms = allBodySymptoms});
  // }

}
