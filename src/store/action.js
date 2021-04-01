import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `cities/changeCity`,
  OFFERS: `offers/offers`,
  CHANGE_SORT: `offers/changeSort`,
  AUTHORIZATION: `site/authorization`,
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({payload: city}));
export const changeSort = createAction(ActionType.CHANGE_SORT, (sort) => ({payload: sort}));
