import cls from "../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const active = (navData:{isActive: boolean}) => navData.isActive ? cls.active : "";

export type DialogItemTypes = {
    ava: string
    name: string
    id: number
}

export function DialogItem(props: DialogItemTypes) {
    // let url = useLocation();
    // console.log(url);
    return (
        <>
            <div className={cls.names__item}>
                <img src={props.ava} alt='ava'/>
                <NavLink className={active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
            </div>

            {/*<div className={cls.names__item}>*/}
            {/*    <img src={props.ava} alt='ava'/>*/}
            {/*    <NavLink to={`${url.pathname}/${props.name}`}>{props.name}</NavLink>*/}
            {/*</div>*/}
        </>
    );
}