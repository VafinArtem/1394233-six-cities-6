import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';

const citiesTab = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const citiesLocations = [
  {
    name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: `Cologne`,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: `Amsterdam`,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: `Dusseldorf`,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
  {
    name: `Hamburg`,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
];

const initialState = {
  city: `Paris`,
  cities: citiesTab,
  citiesLocations
};

const cities = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.CHANGE_CITY, (state, action) => {
    state.city = action.payload;
  });
});

export {cities};
