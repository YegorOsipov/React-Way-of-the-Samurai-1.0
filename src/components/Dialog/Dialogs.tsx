import React from "react";
import cls from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {ActionsType, AddMessageAC, MessagePageTypes, UpdateNewMessageTextAC} from "../../redux/state";

type MessagePageType = {
    messagePage: MessagePageTypes
    dispatch: (action: ActionsType) => void
    newMessageText: string
}

export function Dialogs(props: MessagePageType) {

    const dialogElements = props.messagePage.dialogs.map(el => (<DialogItem ava={el.ava} name={el.name} id={el.id}/>));
    const messageElements = props.messagePage.messages.map(el => (<MessageItem text={el.text} id={el.id}/>))

    let newText = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        if (newText.current) props.dispatch(AddMessageAC(props.messagePage.newMessageText));
    }

    const onMessageChange = () => {
        if (newText.current) {
            props.dispatch(UpdateNewMessageTextAC(newText.current.value));
        }
    }

    return (
        <div className={cls.wrapper}>
            <div className={cls.names}>
                <div className={cls.title}>DIALOGS</div>
                {dialogElements}
            </div>

            <div className={cls.letters}>
                {messageElements}
                <textarea ref={newText} value={props.messagePage.newMessageText} onChange={onMessageChange} className={cls.area} placeholder="your message..."/>
                <div className={cls.btnWrapper}>
                    <button onClick={addMessage} className={cls.btn}>Send</button>
                </div>
            </div>

        </div>
    );
}

