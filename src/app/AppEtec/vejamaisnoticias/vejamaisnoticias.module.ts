import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VejamaisnoticiasPage } from './vejamaisnoticias.page';

const routes: Routes = [
  {
    path: '',
    component: VejamaisnoticiasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VejamaisnoticiasPage]
})
export class VejamaisnoticiasPageModule {}
