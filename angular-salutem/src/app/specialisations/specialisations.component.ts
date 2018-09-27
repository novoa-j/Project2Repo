import { Component, OnInit } from '@angular/core';
import { HealthResultService } from '../services/health-result.service';
import { Specialisation } from '../specialisation';

@Component({
  selector: 'app-specialisations',
  templateUrl: './specialisations.component.html',
  styleUrls: ['./specialisations.component.css']
})
export class SpecialisationsComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
  }

  isClicked: boolean = false;

  specialisations: Specialisation[] = [];

  symptomId: number;
  gender: string;
  age: number;

  getSpecialisations(){
    this.symptomId = parseInt(localStorage.getItem("sympId"));
    this.gender = localStorage.getItem("CurrentGender");
    this.age = parseInt(localStorage.getItem("CurrentDateBirth")); // birth year
    this.changeClicked();
    this.healthResultService.loadSpecialisations(this.symptomId, this.gender, this.age).subscribe((allSpecialisations) => {this.specialisations = allSpecialisations});
  }

  changeClicked(){
    this.isClicked = !this.isClicked;
  }

}
