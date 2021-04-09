import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import {SORT_TYPE_DEFAULT} from '../../consts';

const findOfferIndex = (films, id) => films.findIndex((film) => film.id === id);

const initialState = {
  offers: [],
  sortType: SORT_TYPE_DEFAULT,
  favorites: []
};

const offers = createReducer(initialState, ((builder) => {
  builder.addCase(ActionType.CHANGE_SORT, (state, action) => {
    state.sortType = action.payload;
  });
  builder.addCase(ActionType.LOAD_OFFERS, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(ActionType.ADD_FAVORITE_OFFER, (state, action) => {
    // if (state.loadedFilm !== null && state.loadedFilm.id === action.payload.id) {
    //   state.loadedFilm = Object.assign(
    //       {},
    //       state.loadedFilm,
    //       {isFavorite: !state.loadedFilm.isFavorite}
    //   );
    // } else {
    const currentIndexOffer = findOfferIndex(state.offers, action.payload.id);
    state.favorites = [
      ...state.favorites,
      action.payload
    ];
    state.offers[currentIndexOffer] = Object.assign(
        {},
        state.offers[currentIndexOffer],
        {isFavorite: !state.offers[currentIndexOffer].isFavorite}
    );
    // }
  });
  builder.addCase(ActionType.REMOVE_FAVORITE_OFFER, (state, action) => {
    // if (state.loadedFilm !== null && state.loadedFilm.id === action.payload) {
    //   state.loadedFilm = Object.assign(
    //       {},
    //       state.loadedFilm,
    //       {isFavorite: !state.loadedFilm.isFavorite}
    //   );
    // } else {
    const currentIndexOffer = findOfferIndex(state.offers, action.payload);
    state.favorites = state.favorites.filter((offer) => offer.id !== action.payload);
    state.offers[currentIndexOffer] = Object.assign(
        {},
        state.offers[currentIndexOffer],
        {isFavorite: !state.offers[currentIndexOffer].isFavorite}
    );
    // }
  });
  builder.addCase(ActionType.LOAD_FAVORITE_OFFERS, (state, action) => {
    state.favorites = action.payload;
  });
}));

export {offers};
