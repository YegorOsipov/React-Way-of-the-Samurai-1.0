import {AppType} from "../../redux/store";
import {AddMessageAC, MessageItemType, UpdateNewMessageTextAC} from "../../redux/reducers/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DialogItemTypes} from "./DialogItem/DialogItem";
import {Dispatch} from "redux";

// type MessagePageType = {
//     store: StoreType
// }

// export function DialogsContainer() {
//     const messagePage = props.store.getState().messagePage
//     let addMessage = (newMessageText: string) => props.store.dispatch(AddMessageAC(newMessageText));
//     const onMessageChange = (newText: string) => props.store.dispatch(UpdateNewMessageTextAC(newText));
//
//     return (
//         <Dialogs dialogs={messagePage.dialogs}
//                  messages={messagePage.messages}
//                  newMessageText={messagePage.newMessageText}
//                  addMessage={addMessage}
//                  onMessageChange={onMessageChange}
//
//         />
//     );
// }

type MapStateToPropsType = {
    dialogs: Array<DialogItemTypes>
    messages: Array<MessageItemType>
    newMessageText: string
}
type MapDispatchToProps = {
    addMessage: (newMessageText: string) => void
    onMessageChange: (newText: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppType): MapStateToPropsType => {
    return {
        dialogs: state.DialogsReducer.dialogs,
        messages: state.DialogsReducer.messages,
        newMessageText: state.DialogsReducer.newMessageText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addMessage: (newMessageText: string) => dispatch(AddMessageAC(newMessageText)),
        onMessageChange: (newText: string) => dispatch(UpdateNewMessageTextAC(newText)),
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

