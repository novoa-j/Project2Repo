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
  gender: string;

  genders = ["male", "female", "boy", "girl"];

  getBodySymptoms(){
    this.changeClicked();
    this.healthResultService.loadBodySymptoms(this.id, this.convertGender(this.gender)).subscribe((allBodySymptoms) => {this.bodySymptoms = allBodySymptoms});
    // console.log("id entered: " + this.id);
    // console.log("gender entered: " + this.gender);
    // console.log("converting gender to: " + this.convertGender(this.gender));
  }

  changeClicked(){
    this.isClicked = !this.isClicked;
  }

  convertGender(gen: string): number {
    if (gen == "male") {
      return 0;
    }
    if (gen == "female") {
      return 1;
    }
    if (gen == "boy") {
      return 2;
    }
    if (gen == "girl") {
      return 3;
    }
    else {
      return 0;
    }
  }

}
