import React from "react";
import cls from "./MessageItem.module.css"
import {MessageItemType} from "../../../redux/state";

export function MessageItem(props: MessageItemType) {
    return (
        <div className={cls.lettres__item}>
            <div className={cls.ava__wrapper}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU"
                    alt="ava"/>
                <div>Имя</div>
            </div>
            <div>
                <div className={cls.message}>{props.text}</div>
            </div>
        </div>
    )
}