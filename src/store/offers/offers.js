import {createReducer} from "@reduxjs/toolkit";
import {ActionType} from "../action";
import {SORT_TYPE_DEFAULT} from "../../consts";

const findOfferIndex = (films, id) => films.findIndex((film) => film.id === id);

const initialState = {
  offers: [],
  sortType: SORT_TYPE_DEFAULT,
  favorites: [],
  loadedOffer: null,
  nearbyOffers: [],
};

const changeFavoriteLoadedOffer = (state) => {
  state.loadedOffer = Object.assign({}, state.loadedOffer, {
    isFavorite: !state.loadedOffer.isFavorite,
  });
};

const addFavoriteOffer = (state, action) => {
  state.favorites = [...state.favorites, action.payload];
};

const removeFavoriteOffer = (state, action) => {
  state.favorites = state.favorites.filter((offer) => offer.id !== action.payload);
};

const changeFavoriteStatusOffer = (state, action, isRemove) => {
  let currentIndexOffer;
  if (isRemove) {
    currentIndexOffer = findOfferIndex(state.offers, action.payload);
  } else {
    currentIndexOffer = findOfferIndex(state.offers, action.payload.id);
  }
  state.offers[currentIndexOffer] = Object.assign({}, state.offers[currentIndexOffer], {
    isFavorite: !state.offers[currentIndexOffer].isFavorite,
  });
};

const changeFavoriteStatusNearbyOffer = (state, action, isRemove) => {
  let currentIndexOffer;
  if (isRemove) {
    currentIndexOffer = findOfferIndex(state.nearbyOffers, action.payload);
  } else {
    currentIndexOffer = findOfferIndex(state.nearbyOffers, action.payload.id);
  }
  state.nearbyOffers[currentIndexOffer] = Object.assign({}, state.nearbyOffers[currentIndexOffer], {
    isFavorite: !state.nearbyOffers[currentIndexOffer].isFavorite,
  });
};

const offers = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.CHANGE_SORT, (state, action) => {
    state.sortType = action.payload;
  });
  builder.addCase(ActionType.LOAD_OFFERS, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(ActionType.ADD_FAVORITE_OFFER, (state, action) => {
    if (state.loadedOffer !== null && state.loadedOffer.id === action.payload.id && !state.offers.length) {
      changeFavoriteLoadedOffer(state);
      addFavoriteOffer(state, action);
    } else {
      addFavoriteOffer(state, action);
      if (state.offers.length > 0) {
        changeFavoriteStatusOffer(state, action);
      }
    }

    if (state.nearbyOffers !== null) {
      changeFavoriteStatusNearbyOffer(state, action);
    }
  });
  builder.addCase(ActionType.REMOVE_FAVORITE_OFFER, (state, action) => {
    if (state.loadedOffer !== null && state.loadedOffer.id === action.payload && !state.offers.length) {
      changeFavoriteLoadedOffer(state);
      if (state.favorites.length > 0) {
        removeFavoriteOffer(state, action);
      }
    } else {
      removeFavoriteOffer(state, action);
      if (state.offers.length > 0) {
        changeFavoriteStatusOffer(state, action, true);
      }
    }

    if (state.nearbyOffers !== null) {
      changeFavoriteStatusNearbyOffer(state, action, true);
    }
  });
  builder.addCase(ActionType.LOAD_FAVORITE_OFFERS, (state, action) => {
    state.favorites = action.payload;
  });
  builder.addCase(ActionType.LOAD_OFFER, (state, action) => {
    state.loadedOffer = action.payload;
  });
  builder.addCase(ActionType.LOAD_NEARBY_OFFERS, (state, action) => {
    state.nearbyOffers = action.payload;
  });
});

export {offers};
