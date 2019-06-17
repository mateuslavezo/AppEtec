import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Leiamais2Page } from './leiamais2.page';

const routes: Routes = [
  {
    path: '',
    component: Leiamais2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Leiamais2Page]
})
export class Leiamais2PageModule {}
