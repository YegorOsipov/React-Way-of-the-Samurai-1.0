import LogoSrc from "../../images/logo.png";
import React from "react";
import cls from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {DataType} from "../../redux/reducers/AuthReducer";

type HeaderPropsType = {
    data: DataType
    isAuth: boolean
    setUserData: (data: DataType) => void
}

export function Header(props: HeaderPropsType) {
    return (
        <header className={cls.header}>
            <div className={cls.wrapper}>
                <img className={cls.logo} src={LogoSrc} alt="logo"/>
                <div className={cls.name}>Social Network</div>
            </div>
            <div className={cls.login}>
                {/*{props.data.login ? props.isAuth = true : ''}*/}
                {props.isAuth ? props.data.login : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
}