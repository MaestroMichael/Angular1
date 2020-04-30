import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoffinDancers } from '../dancer/dancer';
import { DancerService } from '../dancer/dancer.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  constructor(private localDancer: DancerService) { }
  dancers: CoffinDancers[];
  displayedColumns: string[] = ['img', 'name', 'possition', 'company'];
  @Output() public DancerEmiter: EventEmitter<string[]> = new EventEmitter<string[]>();

  ngOnInit(): void {
    this.localDancer.workersData.subscribe((data) => {
      this.dancers = data;
    });
  }

  public onClick(row: CoffinDancers): void {
    this.DancerEmiter.emit([row.name, row.possition]);
  }
}
