import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwapiDetailsPage } from './swapi-details.page';

const routes: Routes = [
  {
    path: '',
    component: SwapiDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwapiDetailsPageRoutingModule {}
