/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cls from "./NavBar.module.css";

export function NavBar() {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={cls.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={cls.item}>
                <a href="/news">News</a>
            </div>
            <div className={cls.item}>
                <a href="/music">Music</a>
            </div>
            <div className={cls.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}