import LogoSrc from "../../images/logo.png";
import React from "react";
import cls from "./Header.module.css";

export function Header() {
    return (
        <header className={cls.header}>
            <div className={cls.wrapper}>
                <img className={cls.logo} src={LogoSrc} alt="logo"/>
                <div className={cls.name}>Social Network</div>
            </div>
        </header>
    );
}