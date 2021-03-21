import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('@pages/home').then((m) => m.HomeModule) },
  { path: 'additional-page', loadChildren: () => import('@pages/additional-page').then((m) => m.AdditionalPageModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
