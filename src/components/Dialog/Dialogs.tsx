import React from "react";
import cls from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {MessagePageAndNewMessageTypes} from "../../redux/state";

export function Dialogs(props: MessagePageAndNewMessageTypes) {

    const dialogElements = props.dialogs.map(el => (<DialogItem ava={el.ava} name={el.name} id={el.id}/>));
    const messageElements = props.messages.map(el => (<MessageItem text={el.text} id={el.id}/>))

    let newMessage = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        let text = newMessage.current?.value;
        if (text) {
            props.addMessage(text)
        }
        if (newMessage.current) {
            newMessage.current.value = '';
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
                <textarea ref={newMessage} className={cls.area} placeholder="your message..."/>
                <div className={cls.btnWrapper}>
                    <button onClick={addMessage} className={cls.btn}>Send</button>
                </div>
            </div>

        </div>
    );
}

