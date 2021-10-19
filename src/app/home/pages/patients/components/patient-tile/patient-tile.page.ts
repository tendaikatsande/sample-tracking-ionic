import { Patient } from './../../../../../models/patient.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-tile',
  templateUrl: './patient-tile.page.html',
  styleUrls: ['./patient-tile.page.scss'],
})
export class PatientTilePage implements OnInit {
  @Input()
  patient: Patient;
  actionsHidden = true;
  constructor() { }

  ngOnInit() {
  }

  toggleActions(action: any) {
    action.name = action.name === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.actionsHidden = !this.actionsHidden;

  }

  viewPatient() { }
  addSample() { }

}
