import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Leiamais1Page } from './leiamais1.page';

const routes: Routes = [
  {
    path: '',
    component: Leiamais1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Leiamais1Page]
})
export class Leiamais1PageModule {}
