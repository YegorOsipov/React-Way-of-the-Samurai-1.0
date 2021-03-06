import React from "react";
import cls from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPropsType} from "./DialogsConteiner";

export function Dialogs(props: DialogsPropsType) {

    const dialogElements = props.dialogs.map(el => (<DialogItem key={el.id} ava={el.ava} name={el.name} id={el.id}/>));
    const messageElements = props.messages.map(el => (<MessageItem key={el.id} text={el.text} id={el.id}/>))

    let newText = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => props.addMessage(props.newMessageText);

    const onMessageChange = () => {
        if (newText.current) props.updateNewMessageText(newText.current.value);
    }

    return (
        <div className={cls.wrapper}>
            <div className={cls.names}>
                <div className={cls.title}>DIALOGS</div>
                {dialogElements}
            </div>

            <div className={cls.letters}>
                {messageElements}
                <textarea ref={newText}
                          value={props.newMessageText}
                          onChange={onMessageChange}
                          className={cls.area}
                          placeholder="your message..."
                />
                <div className={cls.btnWrapper}>
                    <button onClick={addMessage} className={cls.btn}>Send</button>
                </div>
            </div>

        </div>
    );
}

