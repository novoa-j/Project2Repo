import { Component, OnInit } from '@angular/core';
import { HealthResultService } from '../services/health-result.service';
import { Symptom, BodySymptom } from '../symptom';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { 
  }

  ngOnInit() {

    this.healthResultService.loadSymptoms().subscribe((allSymptoms) => {
      this.symptoms = allSymptoms;
      this.populateSymptoms(this.symptoms);
    });
    
  }

  isClicked: boolean = false;
  symptoms: Symptom[] = [];
  symptomId: string;
  healthLocationIds: number[];
  saveSymptomIdArray: string[];


  // note: there are 1013 symptoms available
  userEnteredSymptoms: any[];

  sympId: number;

  populateSymptoms(symps: Symptom[]) {
      let dataList = document.getElementById("json-symptomsList");
      dataList.innerHTML = "";
      symps.forEach(item => {
        let tmpOption = document.createElement("option");
        tmpOption.setAttribute("value", item.ID + "");
        tmpOption.innerText = item.Name;
        dataList.appendChild(tmpOption);
      });
  }

  saveSymptoms() {
    this.sympId = parseInt((<HTMLInputElement>document.getElementById("json-symptomsList")).value);
    localStorage.setItem("sympId", this.sympId + "");
    console.log("the id from console " + this.sympId);
    console.log("The symptom id: " + localStorage.getItem("sympId"));

    // int array
    //console.log("length " + this.saveSymptomIdArray.length);

  }

}

