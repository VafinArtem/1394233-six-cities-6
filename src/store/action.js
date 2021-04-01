import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `cities/changeCity`,
  OFFERS: `offers/offers`,
  CHANGE_SORT: `offers/changeSort`,
  AUTHORIZATION: `site/authorization`,
  ACTIVE_FORM: `review/activeForm`
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({payload: city}));
export const changeSort = createAction(ActionType.CHANGE_SORT, (sort) => ({payload: sort}));
export const activeForm = createAction(ActionType.ACTIVE_FORM, (boolean) => ({payload: boolean}));
