import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExconComponent } from './excon/excon.component';
import { ExconCamerasComponent } from './excon-cameras/excon-cameras.component';
import { ExconDevicesComponent } from './excon-devices/excon-devices.component';


const routes: Routes = [{
  path: 'excon', component: ExconComponent, children: [
    {
      path: 'cameras', component: ExconCamerasComponent, outlet: 'exconoutlet'
    },
    {
      path: 'devices', component: ExconDevicesComponent, outlet: 'exconoutlet'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExconRoutingModule { }
