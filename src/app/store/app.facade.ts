import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectSearch,
  selectFilters,
  selectAdvancedSearchState,
} from './app.selectors';
import { AppState } from './app.type';
import { save } from './app.actions';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  search$: Observable<string> = this.store.pipe(select(selectSearch));
  filters$: Observable<string[]> = this.store.pipe(select(selectFilters));
  advancedSearchState$: Observable<AppState> = this.store.pipe(
    select(selectAdvancedSearchState)
  );

  constructor(private store: Store) {}

  dispatchSaveForm(form: { search: string; filters: string[] }): void {
    this.store.dispatch(save(form));
  }
}
