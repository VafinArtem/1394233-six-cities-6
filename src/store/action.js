import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `cities/changeCity`,
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({payload: city}));
