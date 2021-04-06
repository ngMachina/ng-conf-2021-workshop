import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [RouterModule, CommonModule, BrowserModule],
  declarations: [HeaderComponent],
  entryComponents: [HeaderComponent]
})
export class HeaderWCElementModule implements DoBootstrap {
  constructor(private injector: Injector){}
  ngDoBootstrap(): void {
    const el = createCustomElement(HeaderComponent, {injector : this.injector});
    customElements.define('header-element', el);
  }
}
