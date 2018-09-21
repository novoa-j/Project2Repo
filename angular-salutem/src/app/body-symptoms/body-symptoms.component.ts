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

  isClicked: boolean = false;

  bodySymptoms: BodySymptom[] = [];

  id: number;
  gender: number;

  getBodySymptoms(){
    this.changeClicked();
    this.healthResultService.loadBodySymptoms(this.id, this.gender).subscribe((allBodySymptoms) => {this.bodySymptoms = allBodySymptoms});
  }

  changeClicked(){
    this.isClicked = !this.isClicked;
  }

}
