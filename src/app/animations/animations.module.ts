import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotRobotComponent } from './components/mascot-robot/mascot-robot.component';



@NgModule({
  declarations: [
    MascotRobotComponent
  ],
  exports:[
    MascotRobotComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnimationsModule { }
