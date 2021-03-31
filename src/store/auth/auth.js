import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../consts';
import {ActionType} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const auth = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.AUTHORIZATION, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export {auth};
