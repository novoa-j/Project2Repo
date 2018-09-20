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

  bodyLocations: BodyLocation[] = [];

  getBodyLocations(){
    this.healthResultService.loadBodyLocations().subscribe((allBodyLocations) => {this.bodyLocations = allBodyLocations});
  }

}
