import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwapiDetailsPageRoutingModule } from './swapi-details-routing.module';

import { SwapiDetailsPage } from './swapi-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwapiDetailsPageRoutingModule
  ],
  declarations: [SwapiDetailsPage]
})
export class SwapiDetailsPageModule {}
