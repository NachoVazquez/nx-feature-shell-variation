import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FlightSearchComponent } from './flight-search.component';

const routes: Routes = [{ path: '', component: FlightSearchComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [FlightSearchComponent]
})
export class BookingFeatureFlightSearchModule {}
