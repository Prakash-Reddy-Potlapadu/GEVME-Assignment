import React, { useEffect, useState } from "react";
import Grid from "../../shared/Grid";
import { getColumns } from "./utils/helpers";

import "./css/Users.scss";

const Users = () => {
    const [userList, setUserList] = useState([]);
    const [gridData, setGridData] = useState([]);
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        userList && userList.length && setGridData(userList);
    }, [userList]);

    useEffect(() => {
        if (searchString && searchString.length) {
            const filteredData = userList.filter((user) => {
                return (
                    user.name.toLowerCase().includes(searchString.toLowerCase()) ||
                    user.username.toLowerCase().includes(searchString.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchString.toLowerCase()) ||
                    user.phone.toLowerCase().includes(searchString.toLowerCase()) ||
                    user.website.toLowerCase().includes(searchString.toLowerCase())
                );
            });
            setGridData(filteredData);
        } else {
            setGridData(userList);
        }
    }, [searchString]);

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

    const handleSeachFilterChange = (e) => {
        const value = e.target.value;
        setSearchString(value);
    };

    return (
        <main className="user-grid">
            <header className="grid-heading">
                <h2 className="heading">Table</h2>
                <input
                    name="searchfilter"
                    value={searchString}
                    onChange={handleSeachFilterChange}
                    type="text"
                    className="search-filter"
                    placeholder="Seach"
                    title="Search by any field"
                />
            </header>

            <Grid data={gridData} columns={getColumns(handleViewprofile, handleViewPost)} />
        </main>
    );
};

export default Users;
