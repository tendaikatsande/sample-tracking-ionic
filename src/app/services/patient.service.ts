import { Patient } from './../models/patient.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients$ = new BehaviorSubject([]);
  constructor(private http: HttpClient) {
    this.init();
   }
  init() {
    this.getAll().subscribe((patients: Patient[]) => {
      // console.log(patients);
      this.patients$.next(patients);
    }, ({ error }) => { });
  }
  create(patient: Patient) {
    return this.http.post(environment.server_url + 'patient',patient);
   }
  getOne() { }
  getAll() {
    return this.http.get(environment.server_url + 'patient');
  }
  update() { }
  delete() { }

}
