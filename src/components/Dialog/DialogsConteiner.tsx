import React from "react";
import {StoreType,} from "../../redux/state";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../redux/reducers/DialogsReducer";
import {Dialogs} from "./Dialogs";

type MessagePageType = {
    store: StoreType
}

export function DialogsContainer(props: MessagePageType) {
    const messagePage = props.store.getState().messagePage
    let addMessage = (newMessageText: string) => props.store.dispatch(AddMessageAC(newMessageText));
    const onMessageChange = (newText: string) => props.store.dispatch(UpdateNewMessageTextAC(newText));

    return (
        <Dialogs dialogs={messagePage.dialogs}
                 messages={messagePage.messages}
                 newMessageText={messagePage.newMessageText}
                 addMessage={addMessage}
                 onMessageChange={onMessageChange}

        />
    );
}

