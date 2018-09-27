import { Component, OnInit } from '@angular/core';
import { HealthResultService } from '../services/health-result.service';
import { Symptom, BodySymptom } from '../symptom';

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

  symptomId: string;

  healthLocationIds: number[];

  // note: there are 1013 symptoms available
  userEnteredSymptoms: any[];
  
  //input = document.getElementById('symp');

  // storeVal(sympId) {
  //   this.userEnteredSymptoms.push(sympId);
  // }

  getSymptoms(){
    //this.changeClicked();
    let symptomId = ((<HTMLInputElement>document.getElementById("json-symptomsList")).value);
    //console.log(document.getElementById("json-symptomsList").innerHTML);
    console.log("the id selected: " + symptomId);
    this.healthResultService.loadSymptoms().subscribe(
      (allSymptoms) => {
        this.symptoms = allSymptoms;
        //let jsonOptionsString = JSON.stringify(this.symptoms);
        console.log(this.populateSymptoms(this.symptoms));
        //document.getElementById("json-symptomsList").addEventListener("blur", this.storeVal(symptomId));
        //localStorage.setItem("CurrentUserSymptomId", JSON.stringify(item.ID));
      }
    );

  }

  sympId: number;

  populateSymptoms(symps: Symptom[]): string {
      let dataList = document.getElementById("json-symptomsList");
      dataList.innerHTML = "";
      symps.forEach(item => {
        let tmpOption = document.createElement("option");
        tmpOption.setAttribute("value", item.ID + "");
        tmpOption.innerText = item.Name;
        dataList.appendChild(tmpOption);
      });
      //console.log( (<HTMLInputElement>dataList).value);
      return (<HTMLInputElement>dataList).value;
  }
  
}

//    //console.log("in this method");
//    let dataList = document.getElementById('json-symptomsList');
//    symps.forEach(function(item) {
//      let option: any = (<HTMLOptionElement>document.createElement('option'));
//      option.setAttribute("value", item.ID + "");
//      option.setAttribute("name", item.ID + "");
//      option.value = item.Name;

//      // populate all the pre-made options to the dropdown    
//      dataList.appendChild(option);

//      //if one was selected, pass to another function
//    });
//    console.log("THE ATTRIBUTE: " + localStorage.getItem("optionSelected"));
//  }
