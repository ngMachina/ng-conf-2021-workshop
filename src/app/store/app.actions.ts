import { createAction, props } from '@ngrx/store';
import { SearchEvent } from '@components/advanced-search/advanced-search.type';

export const save = createAction(
  '[APP] Save',
  props<SearchEvent>()
);
export const clear = createAction('[APP] Clear');
