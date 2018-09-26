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

  isClicked: boolean = false;

  symptoms: Symptom[] = [];
  
  input = document.getElementById('symp');

  getSymptoms(){
    this.changeClicked();
    this.healthResultService.loadSymptoms().subscribe(
      (allSymptoms) => {
        this.symptoms = allSymptoms;
        //let jsonOptionsString = JSON.stringify(this.symptoms);
        this.populateSymptoms(this.symptoms);
      }
    );
  }

  populateSymptoms(symps: Symptom[]): any {
    //console.log("in this method");
    symps.forEach(function(item) {
      let option: any = (<HTMLOptionElement>document.createElement('option'));
      option.value = item.Name;
      let dataList = document.getElementById('json-symptomsList');
      dataList.appendChild(option);
      //console.log("dataList: " + dataList);
    });
  }

  changeClicked(){
    this.isClicked = !this.isClicked;
  }
  
}
