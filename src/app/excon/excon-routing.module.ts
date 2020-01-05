import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExconComponent } from './excon/excon.component';
import { ExconCamerasComponent } from './excon-cameras/excon-cameras.component';
import { ExconDevicesComponent } from './excon-devices/excon-devices.component';
import { HomeComponent } from './home/home.component';
import { StandAloneComponent } from '../stand-alone/stand-alone.component';


const routes: Routes = [{
  path: 'excon', component: ExconComponent, children: [
    {
      path: 'exconHome', component: HomeComponent, outlet: 'exconOutlet'
    },
    {
      path: 'cameras', component: ExconCamerasComponent, outlet: 'exconOutlet'
    },
    {
      path: 'devices', component: ExconDevicesComponent, outlet: 'exconOutlet'
    },
    {
      path: 'standalone', component: StandAloneComponent, outlet: 'exconOutlet'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExconRoutingModule { }
