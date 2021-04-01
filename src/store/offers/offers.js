import {createReducer} from '@reduxjs/toolkit';
import {hotels} from '../../mocks/offers';
import {ActionType} from '../action';
import {SORT_TYPE_DEFAULT} from '../../consts';

const initialState = {
  offers: hotels,
  sortType: SORT_TYPE_DEFAULT,
};

const offers = createReducer(initialState, ((builder) => {
  builder.addCase(ActionType.CHANGE_SORT, (state, action) => {
    state.sortType = action.payload;
  });
}));

export {offers};
