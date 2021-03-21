import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [FormsModule],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
})
export class CheckBoxModule {}
