import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'; // do not use selenium import!
import { Symptom, BodySymptom } from '../symptom';
import { Observable } from 'rxjs';
import { BodyLocation } from '../body-location';
import { Issue, Issue2 } from '../issue';
import { Specialisation } from '../specialisation';
import { TokenForm } from '../token';
import { Diagnosis } from '../diagnosis';

@Injectable({
  providedIn: 'root'
})

export class HealthResultService {

  // baseUrl = 'https://authservice.priaid.ch/login';

  constructor(private http: HttpClient) { }

  getTokenJSON(): Observable<TokenForm> {
    let key = this.http.post<TokenForm>('https://authservice.priaid.ch/login', null, {
      headers: new HttpHeaders({
        'Authorization' : 'Bearer Fo3a8_GMAIL_COM_AUT:/O0go1aHzJX3ZBqqHEsu3g==',
        'Content-Type' : 'application/json' // multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
      })
    }); // no error handling rn
    //console.log("This is the token: " + JSON.stringify(key));
    return key;
  }
  
  // only use (re-send from Postman) if auth post request fail for some reason...
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im5vdm9hLmpvbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjExMTQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIxMDgiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiMTAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiQmFzaWMiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDE4LTA5LTE0IiwiaXNzIjoiaHR0cHM6Ly9hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNTM3NjY3NzY5LCJuYmYiOjE1Mzc2NjA1Njl9.DNpG7Ej0znHt5zRI5RQtcKVlHtM4mBRPeXkEWiLAUi0';

  // this is going to return an observable array of symptoms
  loadSymptoms(): Observable<Symptom[]> {
    let baseUrl = 'https://healthservice.priaid.ch/symptoms?token=';
    //let token = this.config.getToken(); // implement whenever we finally get the token!!
    let extraArgs = '&format=json&language=en-gb';
    let finalUrl = baseUrl + this.token + extraArgs;
    console.log(finalUrl);
    return this.http.get<Symptom[]>(finalUrl);
  }

  // https://healthservice.priaid.ch/symptoms/10/1?token=
  // THIS IS NOT CORRECT, THERE WILL BE RADIO BUTTON, SO MAKE SURE COMPONENT ADJUSTS FOR THAT!!
  // Male = 0, Female = 1, Boy = 2, Girl = 3
  loadBodySymptoms(id: number, gender: number): Observable<BodySymptom[]> {
    let baseUrl = 'https://healthservice.priaid.ch/symptoms/';
    let extraArgs = '&format=json&language=en-gb';
    let finalUrl = baseUrl + id + '/' + gender + '?token=' + this.token + extraArgs;
    return this.http.get<BodySymptom[]>(finalUrl);
  }

  // https://healthservice.priaid.ch/body/locations?token=
  loadBodyLocations(): Observable<BodyLocation[]> {
    let baseUrl = 'https://healthservice.priaid.ch/body/locations?token=';
    let extraArgs = '&format=json&language=en-gb';
    let finalUrl = baseUrl + this.token + extraArgs;
    return this.http.get<BodyLocation[]>(finalUrl);
  }

  // https://healthservice.priaid.ch/body/locations/10?token=
  loadBodyLocation(id: number): Observable<BodyLocation[]> { // changed back to observable
    let baseUrl = 'https://healthservice.priaid.ch/body/locations/';
    let extraArgs = '&format=json&language=en-gb';
    let finalUrl = baseUrl + id + '?token=' + this.token + extraArgs;
    return this.http.get<BodyLocation[]>(finalUrl);
  }

  // https://healthservice.priaid.ch/issues?token=
  loadIssues(): Observable<Issue[]> { // see issue.ts for class + json layout
    let baseUrl = 'https://healthservice.priaid.ch/issues?token=';
    let extraArgs = '&format=json&language=en-gb';
    let finalUrl = baseUrl + this.token + extraArgs;
    return this.http.get<Issue[]>(finalUrl);
  }

  // https://healthservice.priaid.ch/issues/105/info?token=
  loadIssue(id: number): Observable<Issue2> { // takes as input the id, see issue.ts for class + json layout
    let baseUrl = 'https://healthservice.priaid.ch/issues/';
    let extraArgs = '&format=json&language=en-gb';
    let finalUrl = baseUrl + id + '/info?token=' + this.token + extraArgs;
    return this.http.get<Issue2>(finalUrl);
  }

  // https://healthservice.priaid.ch/symptoms/proposed?symptoms=[106]&gender=male&year_of_birth=1982&token=
  loadProposedSymptoms(id: number, gender: string, age: number): Observable<Symptom[]> {
    let baseUrl = 'https://healthservice.priaid.ch/symptoms/proposed?symptoms=';
    let extraArgs = '&format=json&language=en-gb';
    let finalUrl = baseUrl + '[' + id + ']&gender=' + gender + '&year_of_birth=' + age + '&token=' + this.token + extraArgs;
    return this.http.get<Symptom[]>(finalUrl); 
  }

  // https://healthservice.priaid.ch/diagnosis/specialisations?symptoms=[107]&gender=male&year_of_birth=1983&token=
  loadSpecialisations(id: number, gender: string, age: number): Observable<Specialisation[]> {
    let baseUrl = 'https://healthservice.priaid.ch/diagnosis/specialisations?symptoms=';
    let extraArgs = '&format=json&language=en-gb';
    let finalUrl = baseUrl + '[' + id + ']&gender=' + gender + '&year_of_birth=' + age + '&token=' + this.token + extraArgs;
    return this.http.get<Specialisation[]>(finalUrl); 
  }

  // https://healthservice.priaid.ch/diagnosis?symptoms=[10]&gender=male&year_of_birth=1982&token=
  loadDiagnosis(id: number, gender: string, age: number): Observable<Diagnosis[]> { // NOT DONE!!!!!
    let baseUrl = 'https://healthservice.priaid.ch/diagnosis?symptoms=';
    let extraArgs = '&format=json&language=en-gb';
    let finalUrl = baseUrl + '[' + id + ']&gender=' + gender + '&year_of_birth=' + age + '&token=' + this.token + extraArgs;
    return this.http.get<Diagnosis[]>(finalUrl); 
  }
  
  //loadRedFlag() // need to find an id that generates redflag to test...
}
