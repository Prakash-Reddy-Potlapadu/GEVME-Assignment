const GET_SINGNEDUP_USERS = "https://jsonplaceholder.typicode.com/users";
const GET_USER_POSTS = "https://jsonplaceholder.typicode.com/posts"; //https://jsonplaceholder.typicode.com/posts?userId=1

export const userService = () => {
    const getSignedUpUsers = () => {
        return new Promise((resolve, reject) => {
            fetch(GET_SINGNEDUP_USERS)
                .then((res) => {
                    res.json()
                        .then((res) => {
                            if (res) {
                                resolve(res);
                            } else {
                                reject("Error in fetching Uesrs");
                            }
                        })
                        .catch((e) => reject(e));
                })
                .catch((e) => reject(e));
        });
    };

    const getUserPosts = (userId) => {
        return new Promise((resolve, reject) => {
            fetch(`${GET_USER_POSTS}?${userId}`)
                .then((res) => {
                    res.json()
                        .then((res) => {
                            if (res) {
                                resolve(res);
                            } else {
                                reject("Error in fetching Uesrs");
                            }
                        })
                        .catch((e) => reject(e));
                })
                .catch((e) => reject(e));
        });
    };

    return { getSignedUpUsers, getUserPosts };
};
