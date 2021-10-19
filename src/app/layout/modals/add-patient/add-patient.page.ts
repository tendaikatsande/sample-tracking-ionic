import { Patient } from './../../../models/patient.model';
import { PatientService } from './../../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {
  form = new FormGroup({});
  maxDatePicker = new Date().toISOString();
  isSaving = false;
  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private patientService: PatientService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      appId: [uuidv4()],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      client: ['sample'],
      clientPatientId: ['', [Validators.required]],
      cohortNumber: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      createdBy: [''],
      createdDate: [''],
      lastModifiedBy: [''],
      lastModifiedDate: [''],
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({ dismissed: true });
  }

  async save() {
    const d = new Date();
    this.form.get('createdBy')?.setValue('admin');
    this.form.get('createdDate')?.setValue(d);
    this.form.get('lastModifiedBy')?.setValue('admin');
    this.form.get('lastModifiedDate')?.setValue(d);

    const loader = await this.presentLoading();
    loader.present();
    this.patientService.create(this.form.value).subscribe((patient: Patient) => {
      this.patientService.init();
      loader.dismiss();
      this.dismiss();
    }, async ({ error }) => {
      loader.dismiss();
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Oops',
        message: error?.message ?? 'Something broke',
        buttons: ['OK']
      });

      await alert.present();
    });

  }

  async presentLoading() {
    return await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });

  }

}
