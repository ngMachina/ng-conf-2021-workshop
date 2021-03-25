import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FiltersComponent } from './filters.component';
import { CheckBoxModule } from '@components/checkbox';

@NgModule({
  imports: [CheckBoxModule, ReactiveFormsModule],
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
})
export class FiltersModule {}
