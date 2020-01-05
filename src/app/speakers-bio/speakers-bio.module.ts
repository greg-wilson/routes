import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakersComponent } from './speakers.component';
import { SpeakersListComponent } from './speakers-list/speakers-list.component';
import { BioComponent } from './bio/bio.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SpeakersBioRoutingModule } from './speakers-bio-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    BioComponent,
    SpeakersComponent,
    SpeakersListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // HttpModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    SpeakersBioRoutingModule
  ],
  exports:[
    BioComponent,
    SpeakersComponent,
    SpeakersListComponent
  ]
})
export class SpeakersBioModule { }
