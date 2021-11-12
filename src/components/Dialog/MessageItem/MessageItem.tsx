import React from "react";
import cls from "./MessageItem.module.css"


export function MessageItem() {
    return (
        <div className={cls.lettres__item}>
            <div className={cls.ava__wrapper}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU"
                    alt="ava"/>
                <div>Имя</div>
            </div>
            <div>
                <div className={cls.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
                    voluptatum.
                </div>
            </div>
        </div>
    )
}