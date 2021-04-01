import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';

const initialState = {
  isActiveForm: false,
};

const review = createReducer(initialState, ((builder) => {
  builder.addCase(ActionType.ACTIVE_FORM, (state, action) => {
    state.isActiveForm = action.payload;
  });
}));

export {review};
