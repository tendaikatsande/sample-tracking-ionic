export interface Client{
  id?: string;
  clientUid: string;
  clientId: string;
  name: string;
  phone: string;
  districtId: string;
  districtName: string;
  provinceId: string;
  provinceName: string;
  createdBy: string;
  createdDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
}
