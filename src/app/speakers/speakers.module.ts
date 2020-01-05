import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerMenuComponent } from './speaker-menu/speaker-menu.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SpeakerContentComponent } from './speaker-content/speaker-content.component';

import { MatListModule } from '@angular/material/list';
import { SpeakerMapComponent } from './speaker-map/speaker-map.component';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SpeakerMenuComponent,
    SpeakerDetailsComponent,
    SpeakerContentComponent,
    SpeakerMapComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    SpeakersRoutingModule
  ]
})
export class SpeakersModule { }
