import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';

const initialState = {
  isActiveForm: false,
  reviews: {}
};

const review = createReducer(initialState, ((builder) => {
  builder.addCase(ActionType.ACTIVE_FORM, (state, action) => {
    state.isActiveForm = action.payload;
  });
  builder.addCase(ActionType.LOAD_REVIEWS, (state, action) => {
    state.reviews = Object.assign(
        {},
        state.reviews,
        action.payload
    );
  });
}));

export {review};
