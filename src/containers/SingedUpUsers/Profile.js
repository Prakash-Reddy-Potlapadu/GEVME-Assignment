import React from "react";
import { useUserData } from "./context/context";
import { getAddress } from "./utils/helpers";

const Profile = () => {
    const { data } = useUserData();
    const { currentUserData } = data;

    //read only fields
    const renderField = (label, value = "") => {
        return (
            <section className="profile-field">
                <label className="label">
                    {label} <span style={{ color: "red" }}>{label === "Email" ? "*" : ""}</span>
                </label>
                <div className="value">{value}</div>
            </section>
        );
    };
    const renderProfileImageAndName = (name, userName) => {
        const words = name.split(" ");
        let firstLetters = "";
        words.forEach((word) => {
            firstLetters += word[0];
        });
        return (
            <section className="profile-info">
                <span alt="Profile Pic" className="profile-pic">
                    <label className="name-abbr">{firstLetters}</label>
                </span>
                <h3 className="name">{name}</h3>
                <h4 className="user-name">{userName}</h4>
            </section>
        );
    };
    return (
        <main className="profile-container">
            {renderProfileImageAndName(currentUserData.name, currentUserData.username)}
            {renderField("Email", currentUserData.email)}
            {renderField("Address", getAddress(currentUserData))}
            {renderField("Phone", currentUserData.phone)}
            {renderField("Website", currentUserData.website)}
            {renderField("Company name", currentUserData.company.name)}
        </main>
    );
};
export default Profile;
