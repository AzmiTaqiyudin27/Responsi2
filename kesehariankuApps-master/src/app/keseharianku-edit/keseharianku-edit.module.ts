import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { kesehariankuEditPageRoutingModule } from './keseharianku-edit-routing.module';

import { kesehariankuEditPage } from './keseharianku-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    kesehariankuEditPageRoutingModule,
  ],
  declarations: [kesehariankuEditPage],
})
export class kesehariankuEditPageModule {}
