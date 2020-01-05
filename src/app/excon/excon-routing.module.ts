import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExconComponent } from './excon/excon.component';
import { ExconCamerasComponent } from './excon-cameras/excon-cameras.component';
import { ExconDevicesComponent } from './excon-devices/excon-devices.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component: ExconComponent, children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'cameras', component: ExconCamerasComponent
      },
      {
        path: 'devices', component: ExconDevicesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExconRoutingModule { }
