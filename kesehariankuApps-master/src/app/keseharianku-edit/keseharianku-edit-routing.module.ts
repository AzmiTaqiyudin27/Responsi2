import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { kesehariankuEditPage } from './keseharianku-edit.page';

const routes: Routes = [
  {
    path: '',
    component: kesehariankuEditPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class kesehariankuEditPageRoutingModule {}
