import React from "react";
import cls from "./MessageItem.module.css"

type MessageTextType = {
    text: string
    id: number
}

export function MessageItem(props: MessageTextType) {
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