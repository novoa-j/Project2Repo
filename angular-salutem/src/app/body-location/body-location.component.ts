import { Component, OnInit, Input } from '@angular/core';
import { BodyLocation } from '../body-location';
import { HealthResultService } from '../services/health-result.service';

@Component({
  selector: 'app-body-location',
  templateUrl: './body-location.component.html',
  styleUrls: ['./body-location.component.css']
})
export class BodyLocationComponent implements OnInit {

  constructor(private healthResultService: HealthResultService) { }

  ngOnInit() {
  }

  bodyLocation: BodyLocation;

  @Input() bodyId: number;

  getBodyLocation(){
    this.healthResultService.loadBodyLocation(`${bodyId}`).subscribe((allBodyLocations) => {this.bodyLocation = allBodyLocations});
  }

}
