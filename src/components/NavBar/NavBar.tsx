/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cls from "./NavBar.module.css";

export function NavBar() {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}>
                <a href="#">Profile</a>
            </div>
            <div className={cls.item}>
                <a href="#">Messages</a>
            </div>
            <div className={cls.item}>
                <a href="#">News</a>
            </div>
            <div className={cls.item}>
                <a href="#">Music</a>
            </div>
            <div className={cls.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}