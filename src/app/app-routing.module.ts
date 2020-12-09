import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'star-wars-list',
    pathMatch: 'full'
  },
  {
    path: 'random-user-list',
    loadChildren: () => import('./pages/random-user-list/random-user-list.module').then( m => m.RandomUserListPageModule)
  },
  {
    path: 'star-wars-list',
    loadChildren: () => import('./pages/star-wars-list/star-wars-list.module').then( m => m.StarWarsListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
