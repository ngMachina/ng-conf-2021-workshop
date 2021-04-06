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
import { SearchEvent } from '@components/advanced-search/advanced-search.type';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  search$: Observable<string> = this.store.pipe(select(selectSearch));
  filters$: Observable<object> = this.store.pipe(select(selectFilters));
  advancedSearchState$: Observable<AppState> = this.store.pipe(
    select(selectAdvancedSearchState)
  );

  constructor(private store: Store) {}

  dispatchSaveForm(form: SearchEvent): void {
    this.store.dispatch(save(form));
  }
}
