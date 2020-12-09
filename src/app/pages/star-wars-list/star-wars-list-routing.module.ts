import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarWarsListPage } from './star-wars-list.page';

const routes: Routes = [
  {
    path: '',
    component: StarWarsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarWarsListPageRoutingModule {}
