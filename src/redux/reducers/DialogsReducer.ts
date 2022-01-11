import {ActionsType, MessageItemType, MessagePageTypes} from "../state";

export const DialogsReducer = (state: MessagePageTypes, action: ActionsType) => {
    if (action.type === "ADD-MESSAGE") {
        let newMessage: MessageItemType = { id: 8, text: action.newMessage };
        state.messages.push(newMessage);
        state.newMessageText = '';
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        state.newMessageText = action.newText;
    }
    return state;
};

//
export const AddMessageAC = (newMessage: string) => {
    return {
        type: "ADD-MESSAGE",
        newMessage
    } as const
}

export const UpdateNewMessageTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText
    } as const
}
