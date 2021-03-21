import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditionalPageComponent } from './additional-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdditionalPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditionalPageRoutingModule {}
