import { Component, OnInit } from '@angular/core';
import { HealthResultService } from '../services/health-result.service';
import { Symptom } from '../symptom';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
  }

  symptoms: Symptom[] = [];

  getSymptoms(){
    this.healthResultService.loadSymptoms().subscribe((allSymptoms) => {this.symptoms = allSymptoms});
  }

}
