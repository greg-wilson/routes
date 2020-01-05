import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraComponent } from './camera/camera.component';
import { CameraConfigComponent } from './camera-config/camera-config.component';


const routes: Routes = [
  {
    path: 'camera', component: CameraComponent, children: [
      { path: 'config', component: CameraConfigComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CameraRoutingModule { }
