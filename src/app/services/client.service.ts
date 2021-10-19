import { PouchDbService } from './pouch-db.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private pouchDbService: PouchDbService) { }
  create() { }
  getOne() { }
  getAll() { }
  update() { }
  delete() { }
}
