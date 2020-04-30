import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coffin-boys',
  templateUrl: './coffin-boys.component.html',
  styleUrls: ['./coffin-boys.component.css']
})
export class CoffinBoysComponent {

  @Input() public description: string;

  public value: string | string[];
  public secondValue: string | string[];
  public tableLayout = true;
  public tilesLayout = false;


  loadTable() {
    this.tableLayout = true;
    this.tilesLayout = false;
  }

  loadTiles() {
    this.tableLayout = false;
    this.tilesLayout = true;
  }

  public onChange(event: string | string[]): void {
    this.value = event[0];
    this.secondValue = event[1];
  }

  constructor() { }
}
