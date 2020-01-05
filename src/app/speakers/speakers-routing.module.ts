import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SpeakerMapComponent } from './speaker-map/speaker-map.component';
import { SpeakerContentComponent } from './speaker-content/speaker-content.component';


const routes: Routes = [
  {
    path: 'speakers', component: SpeakerContentComponent, children: [
      {
        path: '', component: SpeakerDetailsComponent, outlet: 'speakeroutlet'
      },
      {
        path: 'speaker-details', component: SpeakerDetailsComponent, outlet: 'speakeroutlet'
      },
      {
        path: 'speakermap', component: SpeakerMapComponent, outlet: 'speakeroutlet'
      },
    ]
  },
  {
    path: 'speakermap2', component: SpeakerMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule { }
