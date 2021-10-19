import { PatientService } from './../../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  patients: Patient[];
  constructor(private patientService: PatientService) {
    patientService.patients$.subscribe((patients: Patient[]) => this.patients = patients);

  }

  ngOnInit() {
  }

}
