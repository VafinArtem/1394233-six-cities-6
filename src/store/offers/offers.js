import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import {SORT_TYPE_DEFAULT} from '../../consts';

const findOfferIndex = (films, id) => films.findIndex((film) => film.id === id);

const initialState = {
  offers: [],
  sortType: SORT_TYPE_DEFAULT,
  favorites: [],
  loadedOffer: null
};

const offers = createReducer(initialState, ((builder) => {
  builder.addCase(ActionType.CHANGE_SORT, (state, action) => {
    state.sortType = action.payload;
  });
  builder.addCase(ActionType.LOAD_OFFERS, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(ActionType.ADD_FAVORITE_OFFER, (state, action) => {
    if (state.loadedOffer !== null && state.loadedOffer.id === action.payload.id && state.offers.length === 0) {
      state.loadedOffer = Object.assign(
          {},
          state.loadedOffer,
          {isFavorite: !state.loadedOffer.isFavorite}
      );
      state.favorites = [
        ...state.favorites,
        action.payload
      ];
    } else {
      state.favorites = [
        ...state.favorites,
        action.payload
      ];
      if (state.offers.length > 0) {
        const currentIndexOffer = findOfferIndex(state.offers, action.payload.id);
        state.offers[currentIndexOffer] = Object.assign(
            {},
            state.offers[currentIndexOffer],
            {isFavorite: !state.offers[currentIndexOffer].isFavorite}
        );
      }
    }
  });
  builder.addCase(ActionType.REMOVE_FAVORITE_OFFER, (state, action) => {
    if (state.loadedOffer !== null && state.loadedOffer.id === action.payload && state.offers.length === 0) {
      state.loadedOffer = Object.assign(
          {},
          state.loadedOffer,
          {isFavorite: !state.loadedOffer.isFavorite}
      );
      if (state.favorites.length > 0) {
        state.favorites = state.favorites.filter((offer) => offer.id !== action.payload);
      }
    } else {
      state.favorites = state.favorites.filter((offer) => offer.id !== action.payload);
      if (state.offers.length > 0) {
        const currentIndexOffer = findOfferIndex(state.offers, action.payload);
        state.offers[currentIndexOffer] = Object.assign(
            {},
            state.offers[currentIndexOffer],
            {isFavorite: !state.offers[currentIndexOffer].isFavorite}
        );
      }
    }
  });
  builder.addCase(ActionType.LOAD_FAVORITE_OFFERS, (state, action) => {
    state.favorites = action.payload;
  });
  builder.addCase(ActionType.LOAD_OFFER, (state, action) => {
    state.loadedOffer = action.payload;
  });
}));

export {offers};
