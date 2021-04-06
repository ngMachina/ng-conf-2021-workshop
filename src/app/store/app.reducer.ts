import { createReducer, on, ActionReducer, Action } from '@ngrx/store';

import * as AppActions from './app.actions';
import { AppState } from './app.type';

export const initialState: AppState = {
  search: '',
  filters: {},
};

const reducer: ActionReducer<AppState> = createReducer(
  initialState,
  on(AppActions.save, (state, { search, filters }) => ({
    ...state,
    search,
    filters,
  })),
  on(AppActions.clear, (_) => ({ search: '', filters: {} }))
);

export const appReducer = (
  state: AppState | undefined,
  action: Action
): AppState => reducer(state, action);
