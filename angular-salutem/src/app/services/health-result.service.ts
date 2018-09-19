import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Symptom } from '../symptom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthResultService {

  // bodyLocUrl: string = '';

  // bodyLocMultUrl: string = '';

  // bodySympUrl: string = '';

  // diagnosisUrl: string = '';

  // issueUrl: string = '';
  
  // issueMultUrl: string = '';

  // proposedSympUrl: string = '';

  // redFlagUrl: string = '';
 
  // symptomsUrl: string = '';

  constructor(private http: HttpClient) { }

  // this is going to return an observable array of symptoms
  loadSymptoms(): Observable<Symptom[]> {
    let baseUrl = 'https://healthservice.priaid.ch/symptoms?token=';
    let token = this.config.getToken();
    let extraArgs = '&format=json&language=en-gb';
    let finalUrl = baseUrl + token + extraArgs;
    return this.http.get<Symptom[]>(finalUrl);
  }
}
