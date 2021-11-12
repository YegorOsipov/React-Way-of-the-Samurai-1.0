import cls from "../Dialogs.module.css";
import React from "react";
import {NavLink, useLocation} from "react-router-dom";

type DItem = {
    ava: string
    name: string
}

export function DialogItem(props: DItem) {
    let url = useLocation();
    console.log(url);
    return (
        <>
            <div className={cls.names__item}>
                <img src={props.ava} alt='ava'/>
                <NavLink to={`${url.pathname}/${props.name}`}>{props.name}</NavLink>
            </div>
        </>
    );
}