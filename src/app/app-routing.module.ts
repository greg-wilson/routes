import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandAloneComponent } from './stand-alone/stand-alone.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuardedComponent } from './guarded/guarded.component';
import { AppAuthGuardService } from './auth-guard.service';
import { AccessDeniedComponent } from './access-denied/access-denied.component';


const routes: Routes = [
  { path: '',   component: StandAloneComponent },
  { path: 'excon',  loadChildren: () => import('./excon/excon.module').then(m => m.ExconModule) },
  { path: 'standalone',   component: StandAloneComponent },
  { path: 'speakers',  loadChildren: () => import('./speakers/speakers.module').then(m => m.SpeakersModule) },
  { path: 'guarded',   component: GuardedComponent, canActivate: [AppAuthGuardService] },
  { path: 'denied',   component: AccessDeniedComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
