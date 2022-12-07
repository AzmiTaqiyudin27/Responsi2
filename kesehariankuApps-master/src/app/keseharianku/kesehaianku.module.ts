import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KesehariankuPageRoutingModule } from './keseharianku-routing.module';

import { kesehariankuPage } from './keseharianku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KesehariankuPageRoutingModule,
  ],
  declarations: [kesehariankuPage],
})
export class kesehariankuPageModule {}
