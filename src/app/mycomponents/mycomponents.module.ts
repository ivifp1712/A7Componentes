import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycompComponent } from './mycomp/mycomp.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [MycompComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [MycompComponent]
})
export class MycomponentsModule { }
