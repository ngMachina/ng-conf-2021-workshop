import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FiltersComponent } from './filters.component';
import { CheckBoxModule } from '@components/checkbox';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CheckBoxModule, ReactiveFormsModule, CommonModule],
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
})
export class FiltersModule {}
