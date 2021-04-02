import browserHistory from "../browser-history";
import {AuthorizationStatus, Url} from "../consts";
import {authorization, loadComments, loadOffers, redirectToRoute} from "./action";

const ApiRoute = {
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  OFFERS: `/hotels`,
  COMMENTS: `/comments`
};

const adaptToClient = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        host: {
          avatarUrl: offer.host.avatar_url,
          isPro: offer.host.is_pro,
          id: offer.host.id,
          name: offer.host.name
        },
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        maxAdults: offer.max_adults,
        previewImage: offer.preview_image
      }
  );

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

const adaptReviewToClient = (review) => {
  const adaptedReview = Object.assign(
      {},
      review,
      {
        user: {
          avatarUrl: review.user.avatar_url,
          id: review.user.id,
          isPro: review.user.is_pro,
          name: review.user.name
        }
      }
  );

  delete adaptedReview.user.is_pro;
  delete adaptedReview.user.avatar_url;

  return adaptedReview;
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
