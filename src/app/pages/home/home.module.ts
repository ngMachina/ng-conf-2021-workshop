import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomePageRoutingModule } from './home-routing.module';
import { AdvancedSearchModule } from '@components/advanced-search';

@NgModule({
  imports: [ReactiveFormsModule, HomePageRoutingModule, AdvancedSearchModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
