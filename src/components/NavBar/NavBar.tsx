/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cls from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

export let active = (navData:{isActive: boolean}) => navData.isActive ? cls.active : "";

export function NavBar() {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}>
                <NavLink to="/" className={active}>Profile</NavLink>
            </div>

            <div className={cls.item}>
                <NavLink to="/dialogs" className={active}>Messages</NavLink>
            </div>

            <div className={cls.item}>
                <NavLink to="/news" className={active}>News</NavLink>
            </div>

            <div className={cls.item}>
                <NavLink to="/music" className={active}>Music</NavLink>
            </div>

            <div className={cls.item}>
                <NavLink to="/settings" className={active}>Settings</NavLink>
            </div>
        </nav>
    );
}