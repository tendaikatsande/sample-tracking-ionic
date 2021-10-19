import { AddPatientPage } from './../../../layout/modals/add-patient/add-patient.page';
import { PatientService } from './../../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {
  patients: Patient[];
  showSearch = true;
  isLoading = true;
  constructor(private patientService: PatientService, private modalCtrl: ModalController) {
    patientService.patients$.subscribe((patients: Patient[]) => { this.patients = patients; this.isLoading = false; });
  }

  ngOnInit() {
  }

  searchPatient() {
    this.showSearch = false;
  }
  async addPatient() {
    (await this.modalCtrl.create({ component: AddPatientPage })).present();
  }

}
