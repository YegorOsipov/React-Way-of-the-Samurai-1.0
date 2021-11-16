import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DialogItemTypes} from "./components/Dialog/DialogItem/DialogItem";
import {MessageItemType} from "./components/Dialog/MessageItem/MessageItem";
import {PostType} from "./components/Profile/MyPost/Post/Post";

export type DialogsTypes = {
    dialogs: Array<DialogItemTypes>
}
export const dialogs = [
    {id: 1, name: "Leon", ava: "https://i.pinimg.com/originals/68/51/b6/6851b67f79f054717ec8f2f3208e9b5a.jpg"},
    {id: 2, name: "David", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU"},
    {id: 3, name: "Sergio", ava: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"},
    {id: 4, name: "Nick", ava: "https://cs5.livemaster.ru/storage/38/09/2ca19526b9518428fd4bfa656eoi--materialy-dlya-tvorchestva-termotransfer-tigr-v-ochkah-termoa.jpg"},
    {id: 5, name: "Sam", ava: "https://www.meme-arsenal.com/memes/be977322b2f450ba30c0e0083441fa9d.jpg"},
    {id: 6, name: "Piter", ava: "https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000206/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"},
    {id: 7, name: "Alex", ava: "https://cdn1.flamp.ru/fe8f2039f0b6422ec0d6e9a500929758.jpeg"},
    {id: 8, name: "Mike", ava: "https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"}
];


export type MessagesTypes = {
    messages: Array<MessageItemType>
}
export const messages = [
    {id: 1, text: "Hi, how are you?"},
    {id: 2, text: "Glad to see you!"},
    {id: 3, text: "We are the champions, my friend!!!"},
    {id: 4, text: "You are welcome!?"},
    {id: 5, text: "No, thanks"},
    {id: 6, text: "You are crazy, man!!!"},
    {id: 7, text: "What is this???"}
];


export type PostsTypes = {
    posts: Array<PostType>
}
export let posts = [
    {id: 1, message: "Don't worry, be happy!!!", countLikes: 12},
    {id: 2, message: "The world is mine!!!", countLikes: 10},
    {id: 3, message: "Glad to see you!!!", countLikes: 6}
];

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
