import { createAction, props } from '@ngrx/store';

export const save = createAction(
  '[APP] Save',
  props<{ search: string; filters: string[] }>()
);
export const clear = createAction('[APP] Clear');
