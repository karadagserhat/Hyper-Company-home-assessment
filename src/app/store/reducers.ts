import { createFeature, createReducer, on } from '@ngrx/store';
import { formActions } from './actions';

const initialState = {
  isSubmitting: false,
  colors: [
    '#2563eb',
    '#e11d48',
    '#c026d3',
    '#059669',
    '#64748b',
    '#db2777',
    '#7c3aed',
    '#06b6d4',
    '#84cc16',
    '#eab308',
    '#fda4af',
  ],
  selectedColor: '',
};

const formFeature = createFeature({
  name: 'form',
  reducer: createReducer(
    initialState,
    // first (flex) form
    on(formActions.submitFirstFormIdle, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(formActions.submitFirstForm, (state) => ({
      ...state,
      isSubmitting: true,
    })),

    // second (grid) form
    on(formActions.submitSecondFormIdle, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(formActions.submitSecondForm, (state) => ({
      ...state,
      isSubmitting: true,
    })),

    // reset form
    on(formActions.resetFirstForm, (state) => ({
      ...state,
      isSubmitting: false,
      selectedColor: '',
    })),
    on(formActions.resetSecondForm, (state) => ({
      ...state,
      isSubmitting: false,
      selectedColor: '',
    })),

    // selected color
    on(formActions.setSelectColor, (state, action) => ({
      ...state,
      isSubmitting: false,
      selectedColor: action.rgb,
    }))
  ),
});

export const {
  name: formFeatureKey,
  reducer: formReducer,
  selectIsSubmitting,
  selectColors,
  selectSelectedColor,
} = formFeature;
