import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Leiamais3Page } from './leiamais3.page';

const routes: Routes = [
  {
    path: '',
    component: Leiamais3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Leiamais3Page]
})
export class Leiamais3PageModule {}
