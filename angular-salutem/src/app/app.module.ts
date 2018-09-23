import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { IssuesComponent } from './issues/issues.component';
import { SpecialisationsComponent } from './specialisations/specialisations.component';
import { IssueComponent } from './issue/issue.component';
import { ProposedSymptomsComponent } from './proposed-symptoms/proposed-symptoms.component';
import { BodyLocationsComponent } from './body-locations/body-locations.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { BodyLocationComponent } from './body-location/body-location.component';
import { RedflagComponent } from './redflag/redflag.component';
import { BodySymptomsComponent } from './body-symptoms/body-symptoms.component';
import { HealthResultService } from './services/health-result.service';
import { AuthorizationComponent } from './authorization/authorization.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SymptomsComponent,
    IssuesComponent,
    SpecialisationsComponent,
    IssueComponent,
    ProposedSymptomsComponent,
    BodyLocationsComponent,
    DiagnosisComponent,
    BodyLocationComponent,
    RedflagComponent,
    BodySymptomsComponent,
    AuthorizationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HealthResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
