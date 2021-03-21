import { createReducer, on, ActionReducer, Action } from '@ngrx/store';
import * as AppActions from './app.actions';
import { AppState } from './app.type';

export const initialState: AppState = {
  search: '',
  filters: [],
};

const _appReducer: ActionReducer<AppState> = createReducer(
  initialState,
  on(AppActions.save, (state, { search, filters }) => {
    console.log('1 state', state);
    console.log('2 app', search);
    return { ...state, search, filters };
  }),
  on(AppActions.clear, (_) => ({ search: '', filters: [] }))
);

export function appReducer(state: AppState | undefined, action: Action): AppState {
  console.log('action', action);
  console.log('state', state);
  return _appReducer(state, action);
}
