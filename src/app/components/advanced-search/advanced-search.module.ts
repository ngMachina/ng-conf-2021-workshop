import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdvancedSearchComponent } from './advanced-search.component';
import { FiltersModule } from '@components/filters';
import { SearchBarModule } from '@components/search-bar';

@NgModule({
  imports: [ReactiveFormsModule, FiltersModule, SearchBarModule],
  declarations: [AdvancedSearchComponent],
  exports: [AdvancedSearchComponent],
})
export class AdvancedSearchModule {}
