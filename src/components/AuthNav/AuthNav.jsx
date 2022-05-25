import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}