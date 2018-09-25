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

  isClicked: boolean = false;

  bodyLocations: BodyLocation[] = [];

  bodyId: number;

  getBodyLocation(){
    this.changeClicked();
    this.healthResultService.loadBodyLocation(this.bodyId).subscribe((allBodyLocations) => {this.bodyLocations = allBodyLocations});
  }

  changeClicked(){
    this.isClicked = !this.isClicked;
  }

  }
