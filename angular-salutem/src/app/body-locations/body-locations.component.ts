import { Component, OnInit } from '@angular/core';
import { BodyLocation } from '../body-location';
import { HealthResultService } from '../services/health-result.service';
import { BodySymptom } from '../symptom';

@Component({
  selector: 'app-body-locations',
  templateUrl: './body-locations.component.html',
  styleUrls: ['./body-locations.component.css']
})
export class BodyLocationsComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
    this.healthResultService.loadBodyLocations().subscribe((allBodyLocations) => {this.bodyLocations = allBodyLocations});
}

  bodyLocations: BodyLocation[] = [];
  bodySubLocations: BodyLocation[] = [];

  bodyId: number;

  // must castHTMLElement as <HTMLInputElement> to use .value method
  getBodyLocations(): number{
    if ((<HTMLInputElement>document.getElementById("bodyLocationSelector")).value === "choose")
      document.getElementById("bodySubLocationSelector").setAttribute("disabled", "boolean");
    else{
      document.getElementById("bodySubLocationSelector").removeAttribute("disabled");
      this.bodyId = parseInt((<HTMLInputElement>document.getElementById("bodyLocationSelector")).value);
      //this.retBodyId();
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
      //console.log("optionslist:  " + JSON.stringify(optionsList));
      optionsList.innerHTML = "";
      this.bodySubLocations.forEach(element => {
        let tmpOption = document.createElement("option");
        tmpOption.setAttribute("value", element.ID + "");
        tmpOption.innerText = element.Name;
        optionsList.appendChild(tmpOption);
      });
    }
  }

  // ----------------------------------------------------------------------------------
  // Body Symptoms:

  isClicked: boolean = false;

  bodySymptoms: BodySymptom[] = [];

  //selectedId: number = this.bodyLocationId.getBodyLocations();
  id: number;
  gender: string;

  genders = ["male", "female", "boy", "girl"];

  getBodySymptoms(){
    this.changeClicked();
    this.healthResultService.loadBodySymptoms(parseInt(localStorage.getItem("bodyId")), this.convertGender(this.gender)).subscribe((allBodySymptoms) => {this.bodySymptoms = allBodySymptoms});
    console.log("gender entered: " + this.gender);
    console.log("converting gender to: " + this.convertGender(this.gender));
    console.log("the bodyId:  " + localStorage.getItem("bodyId"));
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
  } // end convert gender

}
