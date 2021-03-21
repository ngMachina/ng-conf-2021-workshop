import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarModule, FooterModule, FiltersModule, AdvancedSearchModule } from '@components/index';
import { reducers, metaReducers } from './reducers';
import { appReducer } from '@store/app.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationBarModule,
    FooterModule,
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    // }),
    StoreModule.forRoot({ app: appReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
