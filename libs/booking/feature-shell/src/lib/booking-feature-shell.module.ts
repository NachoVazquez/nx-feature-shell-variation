import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '/search',
    pathMatch: 'full',
    loadChildren: () =>
      import('@nx-feature-shell-variation/booking/feature-flight-search').then(
        m => m.BookingFeatureFlightSearchModule
      )
  },
  {
    path: '/passenger',
    pathMatch: 'full',
    loadChildren: () =>
      import('@nx-feature-shell-variation/booking/feature-passenger-info').then(
        m => m.BookingFeaturePassengerInfoModule
      )
  },
  {
    path: '/seatmap',
    pathMatch: 'full',
    loadChildren: () =>
      import('@nx-feature-shell-variation/shared/feature-seat-listing').then(
        m => m.SharedFeatureSeatListingModule
      )
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class BookingFeatureShellModule {}
