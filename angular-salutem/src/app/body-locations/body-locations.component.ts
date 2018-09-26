import { Component, OnInit } from '@angular/core';
import { BodyLocation } from '../body-location';
import { HealthResultService } from '../services/health-result.service';

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

  getBodyLocations(){
    if (document.getElementById("bodyLocationSelector").value === "choose")
      document.getElementById("bodySubLocationSelector").setAttribute("disabled", "boolean");
    else{
      document.getElementById("bodySubLocationSelector").removeAttribute("disabled");
      this.bodyId = document.getElementById("bodyLocationSelector").value;
      this.healthResultService.loadBodyLocation(this.bodyId)
          .subscribe((allBodyLocations) => {
              this.bodySubLocations = allBodyLocations;
              this.populateSubLocations();
            });
        }
  }
  populateSubLocations() {
    if (document.getElementById("bodyLocationSelector").value != "choose"){
      let optionsList = document.getElementById("bodySubLocationSelector");
      optionsList.innerHTML = "";
      this.bodySubLocations.forEach(element => {
        let tmpOption = document.createElement("option");
        tmpOption.setAttribute("value", element.ID + "");
        tmpOption.innerText = element.Name;
        optionsList.appendChild(tmpOption);
      });
    }
  }
}
