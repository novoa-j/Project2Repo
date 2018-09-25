import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { SymptomsComponent } from "./symptoms/symptoms.component";
import { BodySymptomsComponent } from "./body-symptoms/body-symptoms.component";
import { BodyLocationsComponent } from "./body-locations/body-locations.component";
import { BodyLocationComponent } from "./body-location/body-location.component";
import { SpecialisationsComponent } from "./specialisations/specialisations.component";
import { IssuesComponent } from "./issues/issues.component";
import { IssueComponent } from "./issue/issue.component";
import { ProposedSymptomsComponent } from "./proposed-symptoms/proposed-symptoms.component";
import { DiagnosisComponent } from "./diagnosis/diagnosis.component";

export const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'symptoms', component: SymptomsComponent },
    { path: 'body-symptoms', component: BodySymptomsComponent },
    { path: 'body-locations', component: BodyLocationsComponent },
    { path: 'body-location', component: BodyLocationComponent },
    { path: 'issues', component: IssuesComponent },
    { path: 'issue', component: IssueComponent },
    { path: 'proposed-symptoms', component: ProposedSymptomsComponent },
    { path: 'specialisations', component: SpecialisationsComponent },
    { path: 'diagnosis', component: DiagnosisComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }

  ];
  