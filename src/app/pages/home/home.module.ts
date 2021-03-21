import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomePageRoutingModule } from './home-routing.module';
// import { SearchBarModule } from '@components/search-bar';
import { AdvancedSearchModule } from '@components/advanced-search';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, HomePageRoutingModule, AdvancedSearchModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
