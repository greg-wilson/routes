import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExconRoutingModule } from './excon-routing.module';
import { ExconMapComponent } from './excon-map/excon-map.component';
import { ExconComponent } from './excon/excon.component';
import { ExconCamerasComponent } from './excon-cameras/excon-cameras.component';
import { ExconDevicesComponent } from './excon-devices/excon-devices.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StaticNavPanelModule } from '../nav-panel/nav-panel.module';


@NgModule({
  declarations: [ExconMapComponent, ExconComponent, ExconCamerasComponent, ExconDevicesComponent],
  imports: [
    CommonModule,
    ExconRoutingModule,
    StaticNavPanelModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ExconModule { }
