import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SpeakerMapComponent } from './speaker-map/speaker-map.component';
import { SpeakerContentComponent } from './speaker-content/speaker-content.component';


const routes: Routes = [
  { path: '', redirectTo: 'speakers' },
  {
    path: 'speakers', component: SpeakerContentComponent, children: [
      {
        path: 'speakerdetails', component: SpeakerDetailsComponent, outlet: 'speakerOutlet'
      },
      {
        path: 'speakermap', component: SpeakerMapComponent, outlet: 'speakerOutlet'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule { }
