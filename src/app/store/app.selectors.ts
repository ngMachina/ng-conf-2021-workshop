import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppState } from './app.type';

export const selectAdvancedSearchState = createFeatureSelector<AppState>('app');
export const selectSearch = createSelector(selectAdvancedSearchState, (state) => (state ? state.search : ''));
export const selectFilters = createSelector(selectAdvancedSearchState, (state) => (state ? state.filters : {}));

export const selectAdvancedSearch = createSelector(
  selectSearch,
  selectFilters,
  (selectedSearch: string, selectedFilters: object) => ({
    search: selectedSearch,
    filters: selectedFilters,
  })
);
