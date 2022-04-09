import React, { useState } from "react";
import Grid from "../../shared/Grid";
import { getColumns } from "./utils/helpers";

import "./css/Users.scss";

const Users = () => {
    const [userList, setUserList] = useState([]);

    window.addEventListener("message", function (event) {
        console.log("iframedata", event.data);
        const data = event.data;
        if (Array.isArray(data)) {
            setUserList(data);
        }
    });

    const handleViewprofile = (userData) => {
        window.top.postMessage(userData);
    };

    const handleViewPost = (userData) => {
        window.top.postMessage(userData);
    };

    return (
        <main className="user-grid">
            <h2>Table</h2>
            <Grid data={userList} columns={getColumns(handleViewprofile, handleViewPost)} />
        </main>
    );
};

export default Users;
