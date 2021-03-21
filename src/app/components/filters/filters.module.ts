import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FiltersComponent } from './filters.component';
import { CheckBoxModule } from '@components/checkbox';

@NgModule({
  imports: [CommonModule, CheckBoxModule, ReactiveFormsModule],
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
})
export class FiltersModule {}
