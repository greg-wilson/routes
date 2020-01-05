import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticNavPanelComponent } from './static-nav-panel/static-nav-panel.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavRoutingModule } from './nav-panel-routing.module';



@NgModule({
  declarations: [StaticNavPanelComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    NavRoutingModule
  ],
  exports: [
    StaticNavPanelComponent
  ]
})
export class StaticNavPanelModule { }
