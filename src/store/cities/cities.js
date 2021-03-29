import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../../mocks/offers';
import {ActionType} from '../action';

const citiesTab = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const initialState = {
  city: `Paris`,
  cities: citiesTab,
  offers
};

const cities = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.CHANGE_CITY, (state, action) => {
    state.city = action.payload;
  });
});

export {cities};
