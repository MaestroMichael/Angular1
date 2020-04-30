import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CoffinDancers } from '../dancer/dancer';
import { DancerService } from '../dancer/dancer.service';

@Component({
  selector: 'app-tiles-view',
  templateUrl: './tiles-view.component.html',
  styleUrls: ['./tiles-view.component.css']
})
export class TilesViewComponent implements OnInit {

  constructor(private localDancer: DancerService) { }

  dancers: CoffinDancers[];

  @Output() public DancerEmiter: EventEmitter<string[]> = new EventEmitter<string[]>();


  ngOnInit(): void {
    this.localDancer.workersData.subscribe((data) => {
      this.dancers = data;
    });
  }

  public onClick(row: CoffinDancers): void {
    this.DancerEmiter.emit([row.name]);
  }

}
