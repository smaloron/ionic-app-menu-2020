import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarWarsListPageRoutingModule } from './star-wars-list-routing.module';

import { StarWarsListPage } from './star-wars-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarWarsListPageRoutingModule
  ],
  declarations: [StarWarsListPage]
})
export class StarWarsListPageModule {}
