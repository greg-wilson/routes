import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticNavPanelComponent } from './static-nav-panel/static-nav-panel.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FloatingNavPanelComponent } from './floating-nav-panel/floating-nav-panel.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';

@NgModule({
  declarations: [
    StaticNavPanelComponent,
    FloatingNavPanelComponent,
    MenuItemsComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    StaticNavPanelComponent,
    FloatingNavPanelComponent
  ]
})
export class StaticNavPanelModule { }
