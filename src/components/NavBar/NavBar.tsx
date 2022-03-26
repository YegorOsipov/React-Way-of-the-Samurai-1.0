/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cls from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

// export let active = ({isActive: boolean}) => isActive ? cls.active : "";

export function NavBar() {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}>
                <NavLink
                    to="/profile"
                    className={({isActive}) => isActive ? cls.active : ""}>
                    Profile
                </NavLink>
            </div>

            <div className={cls.item}>
                <NavLink
                    to="/dialogs"
                    className={({isActive}) => isActive ? cls.active : ""}>
                    Messages
                </NavLink>
            </div>

            <div className={cls.item}>
                <NavLink
                    to="/users"
                    className={({isActive}) => isActive ? cls.active : ""}>
                    Users
                </NavLink>
            </div>

            <div className={cls.item}>
                <NavLink
                    to="/news"
                    className={({isActive}) => isActive ? cls.active : ""}>
                    News
                </NavLink>
            </div>

            <div className={cls.item}>
                <NavLink
                    to="/music"
                    className={({isActive}) => isActive ? cls.active : ""}>
                    Music
                </NavLink>
            </div>

            <div className={cls.item}>
                <NavLink
                    to="/settings"
                    className={({isActive}) => isActive ? cls.active : ""}>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
}