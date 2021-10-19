export interface Patient {
  id?: string;
  appId: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  client: string;
  clientPatientId: string;
  cohortNumber: string;
  dateCreated: string;
  dateModified: string;
  phoneNumber: string;
  createdBy: string;
  createdDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
}
