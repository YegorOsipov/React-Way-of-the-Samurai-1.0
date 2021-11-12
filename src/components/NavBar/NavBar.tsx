/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cls from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

export function NavBar() {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}>
                <NavLink to="/">Profile</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}