import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Leiamais4Page } from './leiamais4.page';

const routes: Routes = [
  {
    path: '',
    component: Leiamais4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Leiamais4Page]
})
export class Leiamais4PageModule {}
