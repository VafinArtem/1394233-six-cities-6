import {NameSpace} from "../main-reducer";

export const getActiveReviewFormStatus = (state) => state[NameSpace.REVIEW].isActiveForm;
