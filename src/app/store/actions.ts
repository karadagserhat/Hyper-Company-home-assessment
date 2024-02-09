import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const formActions = createActionGroup({
  source: 'form',
  events: {
    'Submit First Form Idle': emptyProps(),
    'Submit First Form': emptyProps(),

    'Submit Second Form Idle': emptyProps(),
    'Submit Second Form': emptyProps(),

    'Reset First Form': emptyProps(),
    'Reset Second Form': emptyProps(),

    'Set Select Color': props<{ rgb: string }>(),
  },
});
