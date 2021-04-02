import browserHistory from "../browser-history";
import {AuthorizationStatus, Url} from "../consts";
import {authorization, redirectToRoute} from "./action";

const ApiRoute = {
  LOGIN: `/login`,
  LOGOUT: `/logout`
};

export const checkLogin = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => dispatch(authorization(AuthorizationStatus.AUTH, data.email)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(authorization(AuthorizationStatus.AUTH, data.email)))
    .then(() => dispatch(redirectToRoute(Url.MAIN)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGOUT)
    .then(() => dispatch(authorization(AuthorizationStatus.NO_AUTH)))
    .then(() => {
      if (browserHistory.location.pathname !== Url.MAIN) {
        dispatch(redirectToRoute(Url.MAIN));
      }
    })
);
