import React, { useCallback, useEffect, useRef } from "react";
import { useUserData } from "./context/context";
import { setSidePanelData, setCurrentUser, setCurrentUserID, setSignedUpUSers } from "./context/actions";
import SidePanel from "../../shared/SidePanel/index";
import Posts from "./Posts";
import Profile from "./Profile";
import { userService } from "../../services/userService";

import "./css/Users.scss";

const SingedUpUsers = () => {
    const { dispatch, data } = useUserData();
    const { viewPosts, viewProfile, signedUpUserList } = data;
    const iframeRef = useRef(null);

    console.log("indexstate", data);
    const handleMessage = useCallback(
        (event) => {
            const data = event.data;
            if (typeof data === "object" && Array.isArray(data) === false && data.id) {
                dispatch(setSidePanelData({ viewPosts: false, viewProfile: true }));
                dispatch(setCurrentUser(event.data));
            }
            if (typeof data !== "object") {
                dispatch(setSidePanelData({ viewPosts: true, viewProfile: false }));
                dispatch(setCurrentUserID(event.data));
            }
        },
        [dispatch]
    );

    useEffect(() => {
        return window.removeEventListener("message", handleMessage);
    }, [handleMessage]);

    const fetchSignedUpUsers = useCallback(async () => {
        const userList = await userService().getSignedUpUsers();
        dispatch(setSignedUpUSers(userList));
    }, [dispatch]);

    useEffect(() => {
        fetchSignedUpUsers();
    }, [fetchSignedUpUsers]);

    useEffect(() => {
        if (signedUpUserList && signedUpUserList.length) {
            iframeRef.current.contentWindow.postMessage(signedUpUserList);
        }
    }, [signedUpUserList]);

    window.addEventListener("message", handleMessage);

    const handleSidePlanelClose = () => {
        dispatch(setSidePanelData({ viewPosts: false, viewProfile: false }));
    };

    return (
        <main className="users-container">
            <iframe src={`${window.location.href}users`} title="Users" ref={iframeRef} style={{ height: "98%", width: "100%", border: "none" }} />
            {(viewPosts === true || viewProfile === true) && (
                <SidePanel isMouseOutClose={true} onClose={handleSidePlanelClose} title={viewProfile ? "Profile" : "Post"}>
                    {viewPosts === true && <Posts />}
                    {viewProfile === true && <Profile />}
                </SidePanel>
            )}
        </main>
    );
};

export default SingedUpUsers;
