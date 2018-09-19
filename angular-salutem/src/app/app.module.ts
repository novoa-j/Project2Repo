import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { IssuesComponent } from './issues/issues.component';
import { SpecialisationsComponent } from './specialisations/specialisations.component';
import { IssueComponent } from './issue/issue.component';
import { ProposedSymptomsComponent } from './proposed-symptoms/proposed-symptoms.component';
import { BodyLocationsComponent } from './body-locations/body-locations.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { BodyLocationComponent } from './body-location/body-location.component';
import { RedflagComponent } from './redflag/redflag.component';
import { LocationComponent } from './location/location.component';
import { BodySymptomsComponent } from './body-symptoms/body-symptoms.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    SymptomsComponent,
    IssuesComponent,
    SpecialisationsComponent,
    IssueComponent,
    ProposedSymptomsComponent,
    BodyLocationsComponent,
    DiagnosisComponent,
    BodyLocationComponent,
    RedflagComponent,
    LocationComponent,
    BodySymptomsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
