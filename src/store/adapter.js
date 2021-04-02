export const adaptToClient = (offer) => {
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

export const adaptReviewToClient = (review) => {
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

export const adaptToServer = (comment) => {
  const adaptedComment = Object.assign(
      {},
      comment,
      {
        comment: comment.review
      }
  );

  delete adaptedComment.review;

  return adaptedComment;
};
