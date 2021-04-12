import { Injector, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdvancedSearchComponent } from './advanced-search.component';
import { FiltersModule } from '@components/filters';
import { SearchBarModule } from '@components/search-bar';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ReactiveFormsModule, FiltersModule, SearchBarModule, BrowserModule],
  declarations: [AdvancedSearchComponent],
  exports: [AdvancedSearchComponent],
})
export class AdvancedSearchModule {
  constructor(private injector: Injector){}
  ngDoBootstrap(): void {
    const el = createCustomElement(AdvancedSearchComponent, {injector : this.injector});
    customElements.define('advanced-search-element', el);
  }
}
