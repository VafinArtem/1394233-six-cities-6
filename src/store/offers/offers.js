import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import {SORT_TYPE_DEFAULT} from '../../consts';

const initialState = {
  offers: [],
  sortType: SORT_TYPE_DEFAULT,
};

const offers = createReducer(initialState, ((builder) => {
  builder.addCase(ActionType.CHANGE_SORT, (state, action) => {
    state.sortType = action.payload;
  });
  builder.addCase(ActionType.LOAD_OFFERS, (state, action) => {
    state.offers = action.payload;
  });
}));

export {offers};
