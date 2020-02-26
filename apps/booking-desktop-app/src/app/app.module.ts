import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookingFeatureShellModule } from '@nx-feature-shell-variation/booking/feature-shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BookingFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
