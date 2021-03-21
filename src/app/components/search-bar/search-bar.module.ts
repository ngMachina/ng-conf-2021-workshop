import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SearchBarComponent } from './search-bar.component';

@NgModule({
  imports: [FormsModule],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
