import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakersComponent } from './speakers.component';
import { SpeakersListComponent } from './speakers-list/speakers-list.component';
import { BioComponent } from './bio/bio.component';

const routes: Routes = [
  { path: '', redirectTo: 'speakers', pathMatch: 'full' },
  { path: 'speakers', component: SpeakersComponent, children: [
    { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
    { path: ':id', component: BioComponent, outlet: 'bio' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SpeakersBioRoutingModule { }
