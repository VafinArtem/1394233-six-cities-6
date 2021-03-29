import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';

const citiesTab = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const initialState = {
  city: `Paris`,
  cities: citiesTab,
};

const cities = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.CHANGE_CITY, (state, action) => {
    state.city = action.payload;
  });
});

export {cities};
