import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { kesehariankuTambahPage } from './keseharianku.page';

const routes: Routes = [
  {
    path: '',
    component: kesehariankuTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class kesehariankuTambahPageRoutingModule {}
