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
  POST_REVIEW: `reviews/post`
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({payload: city}));
export const changeSort = createAction(ActionType.CHANGE_SORT, (sort) => ({payload: sort}));
export const activeForm = createAction(ActionType.ACTIVE_FORM, (boolean) => ({payload: boolean}));
export const authorization = createAction(ActionType.AUTHORIZATION, (action, email) => ({payload: {action, email}}));
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({payload: url}));
export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({payload: offers}));
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
