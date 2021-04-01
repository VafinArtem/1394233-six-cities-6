import {createReducer} from '@reduxjs/toolkit';
import {hotels} from '../../mocks/offers';
import {ActionType} from '../action';
import {SortType} from '../../consts';

const initialState = {
  offers: hotels,
  sortType: SortType.POPUPLAR,
};

const offers = createReducer(initialState, ((builder) => {
  builder.addCase(ActionType.CHANGE_SORT, (state, action) => {
    state.sortType = action.payload;
  });
}));

export {offers};
