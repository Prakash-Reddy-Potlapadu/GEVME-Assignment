import React, { useEffect } from "react";
import { useUserData } from "./context/context";
import { setUsetPosts } from "./context/actions";
import { userService } from "../../services/userService";

const Posts = () => {
    const { data, dispatch } = useUserData();
    const { currentUserPosts, currentUserID } = data;

    const fetchUserPosts = async () => {
        const res = await userService().getUserPosts(currentUserID);
        res && res.length && dispatch(setUsetPosts(res));
    };

    useEffect(() => {
        currentUserID && fetchUserPosts();
    }, []);

    const renderPost = (postObj) => {
        return (
            <section className="post-container" key={postObj.id}>
                <h3>{postObj.title}</h3>
                <p>{postObj.body}</p>
            </section>
        );
    };
    return (
        <main className="posts-container">
            {currentUserPosts &&
                currentUserPosts.length > 0 &&
                currentUserPosts.map((postObj) => {
                    return renderPost(postObj);
                })}
        </main>
    );
};
export default Posts;
