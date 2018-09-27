import { Component, OnInit } from '@angular/core';
import { BodyLocation } from '../body-location';
import { HealthResultService } from '../services/health-result.service';
import { BodySymptom, Symptom } from '../symptom';

@Component({
  selector: 'app-body-locations',
  templateUrl: './body-locations.component.html',
  styleUrls: ['./body-locations.component.css']
})
export class BodyLocationsComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
    this.healthResultService.loadBodyLocations().subscribe((allBodyLocations) => {this.bodyLocations = allBodyLocations});
    document.getElementById("navIssue").setAttribute("disabled","");
    document.getElementById("navPropos").setAttribute("disabled","");
    document.getElementById("navSpec").setAttribute("disabled","");
    document.getElementById("navDiagnosis").setAttribute("disabled","");
}

  bodyLocations: BodyLocation[] = [];
  bodySubLocations: BodyLocation[] = [];
  healthLocationIds: number[];

  // note: there are 1013 symptoms available
  userEnteredSymptoms: any[];

  bodyId: number;
  subBodyId: number;

  // must castHTMLElement as <HTMLInputElement> to use .value
  getBodyLocations(): number{
    if ((<HTMLInputElement>document.getElementById("bodyLocationSelector")).value === "choose")
      document.getElementById("bodySubLocationSelector").setAttribute("disabled", "boolean");
    else{
      document.getElementById("bodySubLocationSelector").removeAttribute("disabled");
      this.bodyId = parseInt((<HTMLInputElement>document.getElementById("bodyLocationSelector")).value);
      localStorage.setItem("bodyId", this.bodyId + "");
      console.log("bodyId" + this.bodyId);
      this.healthResultService.loadBodyLocation(this.bodyId)
          .subscribe((allBodyLocations) => {
              this.bodySubLocations = allBodyLocations;
              this.populateSubLocations();
            });
        }
        return this.bodyId;
  }

 populateSubLocations() {
    if ((<HTMLInputElement>document.getElementById("bodyLocationSelector")).value != "choose"){
      let optionsList = document.getElementById("bodySubLocationSelector");
      console.log("optionslist:  " + JSON.stringify(optionsList));
      //this.subBodyId = parseInt((<HTMLInputElement>document.getElementById("bodySubLocationSelector")).value);
      //localStorage.setItem("subBodyId", this.subBodyId + "");
      //console.log(this.subBodyId);
      optionsList.innerHTML = "";
      this.bodySubLocations.forEach(element => {
        let tmpOption = document.createElement("option");
        tmpOption.setAttribute("value", element.ID + "");
        tmpOption.innerText = element.Name;
        optionsList.appendChild(tmpOption);
      });
    }
  }

  saveSubBodyLocation() {
    this.subBodyId = parseInt((<HTMLInputElement>document.getElementById("bodySubLocationSelector")).value);
    localStorage.setItem("subBodyId", this.subBodyId + "");
    console.log(this.subBodyId);
    document.getElementById("permission").removeAttribute("hidden");  
  }

  // ----------------------------------------------------------------------------------
  // Questions:

  loadQuestions(){
    document.getElementById("questions").removeAttribute("hidden");
    document.getElementById("permission").setAttribute("hidden", "boolean");
    //this.getBodySymptoms();
  }

  // ----------------------------------------------------------------------------------
  // Body Symptoms:

  isClicked: boolean = false;
  bodySymptoms: BodySymptom[] = [];
  bodySympId: number;
  saveBodySymptomIdArray: string[] = [];

  //selectedId: number = this.bodyLocationId.getBodyLocations();
  // id: number;
  gender: string;
  genders = ["male", "female", "boy", "girl"];
  age: number;

  getBodySymptoms(){
    document.getElementById("bodySymptom").removeAttribute("hidden");
    document.getElementById("questions").setAttribute("hidden", "boolean");

    this.gender = localStorage.getItem("CurrentGender")

    // this.changeClicked();
    // document.getElementById("myButton").removeAttribute("disabled");
    this.healthResultService.loadBodySymptoms(parseInt(localStorage.getItem("subBodyId")), this.convertGender(this.gender))
    .subscribe((allBodySymptoms) => {
        this.bodySymptoms = allBodySymptoms;
        this.populateBodySymptoms(this.bodySymptoms)});

    console.log("gender entered: " + this.gender);
    console.log("converting gender to: " + this.convertGender(this.gender));
    console.log("the bodyId:  " + localStorage.getItem("bodyId"));
    console.log("the subBodyId:  " + localStorage.getItem("subBodyId"));
  }

  populateBodySymptoms(bodySymps: BodySymptom[]) {
    let dataList = document.getElementById("bodySymptomSelector");
    dataList.innerHTML = "";
    bodySymps.forEach(item => {
      let tmpOption = document.createElement("option");
      tmpOption.setAttribute("value", item.ID + "");
      tmpOption.innerText = item.Name;
      dataList.appendChild(tmpOption);
    });
  }

  saveBodySymptoms() {
    document.getElementById("bodySymptom").removeAttribute("hidden");
    this.bodySympId = parseInt((<HTMLInputElement>document.getElementById("bodySymptomSelector")).value);
    localStorage.setItem("bodySympId", this.bodySympId + "");
    console.log("the id from console " + this.bodySympId);
    console.log("The symptom id: " + localStorage.getItem("bodySympId"));

    // string array
    console.log("length " + this.saveBodySymptomIdArray.push(this.bodySympId + ""));
    console.log("current array of symptom ids: " + this.saveBodySymptomIdArray);
  }

  // changeClicked(){
  //   this.isClicked = !this.isClicked;
  // }

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
  } // end convert gender

}
