import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    canLoad: [AutoLoginGuard],
  },
  {
    path: 'keseharianku',
    loadChildren: () =>
      import('./keseharianku/kesehaianku.module').then(
        (m) => m.kesehariankuPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'keseharianku-tambah',
    loadChildren: () =>
      import('./keseharianku-tambah/keseharianku-tambah.module').then(
        (m) => m.kesehariankuTambahPageModule
      ),
  },
  {
    path: 'keseharianku-edit/:id',
    loadChildren: () =>
      import('./keseharianku-edit/keseharianku-edit.module').then(
        (m) => m.kesehariankuEditPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
