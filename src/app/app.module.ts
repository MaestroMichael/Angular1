import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
// import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { CoffinBoysComponent } from './coffin-boys/coffin-boys.component';
import { TableViewComponent } from './table-view/table-view.component';
import { AppRoutingModule } from './app-routing.module';
import { TilesViewComponent } from './tiles-view/tiles-view.component';
// import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    AppComponent,
    CoffinBoysComponent,
    TableViewComponent,
    TilesViewComponent
  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    AppRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    // IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    RouterModule.forRoot([
      {path: 'table', component: TableViewComponent},
      {path: 'tiles', component: TilesViewComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
