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
  },
  {
    path: 'swapi-details/:id',
    loadChildren: () => import('./pages/swapi-details/swapi-details.module').then( m => m.SwapiDetailsPageModule)
  },
  {
    path: 'planet-list',
    loadChildren: () => import('./pages/planet-list/planet-list.module').then( m => m.PlanetListPageModule)
  },
  {
    path: 'planet-details/:id',
    loadChildren: () => import('./pages/planet-details/planet-details.module').then( m => m.PlanetDetailsPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
