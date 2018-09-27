import { Component, OnInit } from '@angular/core';
import { HealthResultService } from '../services/health-result.service';
import { Diagnosis } from '../diagnosis';


@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
  }




  isClicked: boolean = false;

  diagnoses: Diagnosis[] = [];
  //specialisations: Spec[] = [];
  objectkeys = Object.keys;

  id: number;
  gender: string;
  age: number;

  getDiagnoses(){
    this.changeClicked();
    console.log(Diagnosis);
    this.healthResultService.loadDiagnosis(this.id, this.gender, this.age).subscribe((allDiagnoses) => {this.diagnoses = allDiagnoses});
    //this.healthResultService.loadDiagnosis(this.id, this.gender, this.age).subscribe((allSpecialisations) => {this.specialisations = allSpecialisations});
  }

  changeClicked(){
    this.isClicked = !this.isClicked;
  }

}
