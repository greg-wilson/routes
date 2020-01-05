import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './camera/camera.component';
import { CameraConfigComponent } from './camera-config/camera-config.component';
import { CameraRoutingModule } from './camera-routing.module';



@NgModule({
  declarations: [
    CameraComponent, CameraConfigComponent
  ],
  imports: [
    CommonModule,
    CameraRoutingModule
  ]
})
export class CameraModule { }
