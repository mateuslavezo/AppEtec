import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Leiamais5Page } from './leiamais5.page';

const routes: Routes = [
  {
    path: '',
    component: Leiamais5Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Leiamais5Page]
})
export class Leiamais5PageModule {}
