import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoffinDancers } from './dancer';
import { Storage } from '@ionic/storage';
import { table } from './dancerTemplate';

@Injectable({
  providedIn: 'root'
})
export class DancerService {

  private table: CoffinDancers[] = table;

  public workersData: BehaviorSubject<CoffinDancers[]> = new BehaviorSubject<CoffinDancers[]>(this.table);
  /*example how to handle BehabiorSubject is taken form documentation of CDK data-table  */
  connect(): Observable<CoffinDancers[]> {
    return this.workersData;
  }
  disconnect() {}
}
