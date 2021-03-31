import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `cities/changeCity`,
  OFFERS: `offers/offers`,
  AUTHORIZATION: `site/authorization`,
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({payload: city}));
