import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoffinDancers } from './dancer';
import { Storage } from '@ionic/storage';
import { table } from './dancerTemplate';

@Injectable({
  providedIn: 'root'
})
export class DancerService {

  private table: CoffinDancers[] = table;

  public workersData: BehaviorSubject<CoffinDancers[]> = new BehaviorSubject<CoffinDancers[]>(this.table)

  constructor(private storage: Storage) { }
  public load(): void {

    this.storage.get('workersData').then((data) => {

      this.workersData.next(data);

    });

  }

}
