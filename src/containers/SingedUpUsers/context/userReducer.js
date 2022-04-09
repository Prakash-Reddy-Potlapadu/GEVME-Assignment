import { actionTypes } from "./actionTypes";

export const initialUserState = {
    viewProfile: false,
    viewPosts: false,
    signedUpUserList: [],
    currentUserData: {},
    currentUserID: "",
    currentUserPosts: [],
};

export function userReducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_SINGEDUP_USERS:
            return { ...state, signedUpUserList: payload };
        case actionTypes.SET_CURRENT_USER:
            return { ...state, currentUserData: payload };
        case actionTypes.SET_CURRENT_USERID:
            return { ...state, currentUserID: payload };
        case actionTypes.UPDATE_SIDEPANEL_STATE:
            return { ...state, ...payload };
        case actionTypes.SET_USER_POSTS:
            return { ...state, currentUserPosts: payload };
        default:
            return { ...state };
    }
}
