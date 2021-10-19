export interface Shipment {
  id?: string;
  appId: string;
  description: string;
  clientId: string;
  samples: any;
  status: string;
  dateCreated: string;
  dateModified: string;
  riderId: string;
  riderName: string;
  destination: string;
  clusterClientId: string;
  temperatureOrigin: string;
  temperatureDestination: string;
  isModifiedByHub: boolean;
  isModifiedByFacility: boolean;
  isModifiedByLaboratory: boolean;
  isModifiedByCourier: boolean;
  createdBy: string;
  createdDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
}
