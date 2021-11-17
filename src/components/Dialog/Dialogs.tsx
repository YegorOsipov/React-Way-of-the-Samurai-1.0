import React from "react";
import cls from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {MessagePageTypes} from "../../redux/state";

export function Dialogs(props: MessagePageTypes) {

    const dialogElements = props.dialogs.map(el => (<DialogItem ava={el.ava} name={el.name} id={el.id}/>));
    const messageElements = props.messages.map(el => (<MessageItem text={el.text} id={el.id}/>))

    return (
        <div className={cls.wrapper}>
            <div className={cls.names}>
                <div className={cls.title}>DIALOGS</div>
                {dialogElements}
            </div>

            <div className={cls.letters}>
                {messageElements}
            </div>

        </div>
    );
}

