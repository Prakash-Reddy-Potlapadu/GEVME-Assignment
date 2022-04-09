import { actionTypes } from "./actionTypes";

export const setSignedUpUSers = (signedUpUserList) => {
    return {
        type: actionTypes.SET_SINGEDUP_USERS,
        payload: signedUpUserList,
    };
};

export const setCurrentUser = (currentUser) => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        payload: currentUser,
    };
};
export const setCurrentUserID = (currentUserID) => {
    return {
        type: actionTypes.SET_CURRENT_USERID,
        payload: currentUserID,
    };
};

export const setSidePanelData = (sidePanelState) => {
    return {
        type: actionTypes.UPDATE_SIDEPANEL_STATE,
        payload: sidePanelState,
    };
};

export const setUsetPosts = (posts) => {
    return {
        type: actionTypes.SET_USER_POSTS,
        payload: posts,
    };
};
