import browserHistory from "../browser-history";
import {AuthorizationStatus, Url} from "../consts";
import {authorization, loadComments, loadOffers, redirectToRoute, addReview, addFavoriteList, removeFavoriteList, loadFavoriteOffers, loadOffer, loadNearbyOffers} from "./action";
import {adaptReviewToClient, adaptToClient, adaptToServer} from "./adapter";

const ApiRoute = {
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  OFFERS: `/hotels`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`
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

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.OFFERS)
    .then(({data}) => data.map(adaptToClient))
    .then((data) => dispatch(loadOffers(data)))
);

export const fetchComments = (reviewID) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.COMMENTS}/${reviewID}`)
    .then(({data}) => data.map(adaptReviewToClient))
    .then((data) => dispatch(loadComments(data, reviewID)))
    .catch(() => {})
);

export const postReview = (id, comment) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.COMMENTS}/${id}`, adaptToServer(comment))
    .then(({data}) => data.map(adaptReviewToClient))
    .then((data) => dispatch(addReview(data, id)))
    .catch(() => {})
);

export const addFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => adaptToClient(data))
    .then((data) => {
      return status === 1 ? dispatch(addFavoriteList(data)) : dispatch(removeFavoriteList(data.id));
    })
    .catch(() => dispatch(redirectToRoute(Url.SIGN_IN)))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FAVORITE)
    .then(({data}) => data.map(adaptToClient))
    .then((data) => dispatch(loadFavoriteOffers(data)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}/${id}`)
    .then(({data}) => adaptToClient(data))
    .then((data) => dispatch(loadOffer(data)))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => data.map(adaptToClient))
    .then((data) => dispatch(loadNearbyOffers(data)))
);
