import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CursooferecidoPage } from './cursooferecido.page';

const routes: Routes = [
  {
    path: '',
    component: CursooferecidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CursooferecidoPage]
})
export class CursooferecidoPageModule {}
