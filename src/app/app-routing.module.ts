import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'calendario', loadChildren: './AppEtec/calendario/calendario.module#CalendarioPageModule' },
  { path: 'login', loadChildren: './AppEtec/login/login.module#LoginPageModule' },
  { path: 'leiamais1', loadChildren: './AppEtec/leiamais1/leiamais1.module#Leiamais1PageModule' },
  { path: 'leiamais2', loadChildren: './AppEtec/leiamais2/leiamais2.module#Leiamais2PageModule' },
  { path: 'cadastrar', loadChildren: './AppEtec/cadastrar/cadastrar.module#CadastrarPageModule' },
  { path: 'calendario2', loadChildren: './AppEtec/calendario2/calendario2.module#Calendario2PageModule' },
  { path: 'vejamaisnoticias', loadChildren: './AppEtec/vejamaisnoticias/vejamaisnoticias.module#VejamaisnoticiasPageModule' },
  { path: 'leiamais3', loadChildren: './AppEtec/leiamais3/leiamais3.module#Leiamais3PageModule' },
  { path: 'leiamais4', loadChildren: './AppEtec/leiamais4/leiamais4.module#Leiamais4PageModule' },
  { path: 'leiamais5', loadChildren: './AppEtec/leiamais5/leiamais5.module#Leiamais5PageModule' },
  { path: 'quemsomos', loadChildren: './AppEtec/quemsomos/quemsomos.module#QuemsomosPageModule' },
  { path: 'quemequem', loadChildren: './AppEtec/quemequem/quemequem.module#QuemequemPageModule' },
  { path: 'cursooferecido', loadChildren: './AppEtec/cursooferecido/cursooferecido.module#CursooferecidoPageModule' },
  { path: 'cursotecnico', loadChildren: './AppEtec/cursotecnico/cursotecnico.module#CursotecnicoPageModule' },
  { path: 'faleconosco', loadChildren: './AppEtec/faleconosco/faleconosco.module#FaleconoscoPageModule' },
  { path: 'sigaocps', loadChildren: './AppEtec/sigaocps/sigaocps.module#SigaocpsPageModule' },
  { path: 'institucional', loadChildren: './AppEtec/institucional/institucional.module#InstitucionalPageModule' },
  { path: 'etec', loadChildren: './AppEtec/etec/etec.module#EtecPageModule' },
  { path: 'contatos', loadChildren: './AppEtec/contatos/contatos.module#ContatosPageModule' },
  { path: 'paginaaluno', loadChildren: './AppEtec/paginaaluno/paginaaluno.module#PaginaalunoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
