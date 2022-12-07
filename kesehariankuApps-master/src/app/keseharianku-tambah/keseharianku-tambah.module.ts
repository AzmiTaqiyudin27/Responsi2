import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { kesehariankuTambahPageRoutingModule } from './keseharianku-tambah-routing.module';

import { kesehariankuTambahPage } from './keseharianku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    kesehariankuTambahPageRoutingModule,
  ],
  declarations: [kesehariankuTambahPage],
})
export class kesehariankuTambahPageModule {}
