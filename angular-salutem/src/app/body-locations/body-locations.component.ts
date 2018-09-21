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
  }

  isClicked: boolean = false;

  bodyLocations: BodyLocation[] = [];

  getBodyLocations(){
    this.changeClicked();
    this.healthResultService.loadBodyLocations().subscribe((allBodyLocations) => {this.bodyLocations = allBodyLocations});
  }

  changeClicked(){
    this.isClicked = !this.isClicked;
  }
  
}
