import {createReducer} from '@reduxjs/toolkit';
import {hotels} from '../../mocks/offers';
import {ActionType} from '../action';

const initialState = {
  offers: hotels
};

const offers = createReducer(initialState, ((builder) => {
  builder.addCase(ActionType.OFFERS);
}));

export {offers};
