import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `cities/changeCity`,
  OFFERS: `offers/offers`,
  CHANGE_SORT: `offers/changeSort`,
  AUTHORIZATION: `site/authorization`,
  ACTIVE_FORM: `reviews/activeForm`,
  REDIRECT_TO_ROUTE: `site/redirectToRoute`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_REVIEWS: `reviews/load`,
  POST_REVIEW: `reviews/post`,
  ADD_FAVORITE_OFFER: `offers/addFavorite`,
  REMOVE_FAVORITE_OFFER: `offers/removeFavorite`,
  LOAD_FAVORITE_OFFERS: `offers/loadFavorites`,
  LOAD_OFFER: `offers/loadOffer`,
  LOAD_NEARBY_OFFERS: `offers/loadNearby`,
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({payload: city}));
export const changeSort = createAction(ActionType.CHANGE_SORT, (sort) => ({payload: sort}));
export const activeForm = createAction(ActionType.ACTIVE_FORM, (boolean) => ({payload: boolean}));
export const authorization = createAction(ActionType.AUTHORIZATION, (action, email) => ({payload: {action, email}}));
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({payload: url}));
export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({payload: offers}));
export const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS, (offers) => ({payload: offers}));
export const loadComments = createAction(ActionType.LOAD_REVIEWS, (comments, id) => {
  return {
    payload: {
      [id]: comments
    }
  };
});
export const addReview = createAction(ActionType.POST_REVIEW, (comments, id) => {
  return {
    payload: {
      [id]: comments
    }
  };
});
export const addFavoriteList = createAction(ActionType.ADD_FAVORITE_OFFER, (offer) => ({payload: offer}));
export const removeFavoriteList = createAction(ActionType.REMOVE_FAVORITE_OFFER, (id) => ({payload: id}));
export const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITE_OFFERS, (offers) => ({payload: offers}));
export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({payload: offer}));
