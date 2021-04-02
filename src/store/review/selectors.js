import {NameSpace} from "../main-reducer";

export const getActiveReviewFormStatus = (state) => state[NameSpace.REVIEW].isActiveForm;
export const getReviews = (state) => state[NameSpace.REVIEW].reviews;
export const getStatusResetForm = (state) => state[NameSpace.REVIEW].needResetForm;
