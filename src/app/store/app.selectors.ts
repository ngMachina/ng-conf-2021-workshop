import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppState } from './app.type';

// export const selectBooks = createSelector(
//   (state: AppState) => state.books,
//   (books: Array<Book>) => books
// );

export const selectAdvancedSearchState = createFeatureSelector<AppState>('app-search');
export const selectSearch = createSelector(selectAdvancedSearchState, (state: AppState) => (state ? state.search : ''));
export const selectFilters = createSelector(selectAdvancedSearchState, (state: AppState) =>
  state ? state.filters : []
);

export const selectAdvancedSearch = createSelector(
  selectAdvancedSearchState,
  selectSearch,
  selectFilters,
  (state, selectedSearch: string, selectedFilters: string[]) => {
    return {
      search: selectedSearch,
      filters: selectedFilters,
    };
  }
);
