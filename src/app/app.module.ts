import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SpeakersModule } from './speakers/speakers.module';
import { StandAloneComponent } from './stand-alone/stand-alone.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuardedComponent } from './guarded/guarded.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ExconModule } from './excon/excon.module';

@NgModule({
  declarations: [
    AppComponent,
    StandAloneComponent,
    PageNotFoundComponent,
    GuardedComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SpeakersModule,
    ExconModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
