import React from "react";
import cls from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";


// const nameAndSrc = [
//     {id: 1, name: 'Leo', ava: 'https://i.pinimg.com/originals/68/51/b6/6851b67f79f054717ec8f2f3208e9b5a.jpg'},
//
//     {id: 2, name: 'David', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU'},
//
//     {id: 2, name: 'Nick', ava: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'},
//
//     {id: 2, name: 'Serg', ava: 'https://cs5.livemaster.ru/storage/38/09/2ca19526b9518428fd4bfa656eoi--materialy-dlya-tvorchestva-termotransfer-tigr-v-ochkah-termoa.jpg'},
//
// ];

// const messeage = [
//     ''
// ];

export function Dialogs() {
    return (
        <div className={cls.wrapper}>
            <div className={cls.names}>
                <div className={cls.title}>DIALOGS</div>

                <DialogItem ava="https://i.pinimg.com/originals/68/51/b6/6851b67f79f054717ec8f2f3208e9b5a.jpg"
                            name="Leon"/>

                <DialogItem
                    ava="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU"
                    name="David"/>

                <DialogItem
                    ava="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                    name="Sergio"/>

                <DialogItem
                    ava="https://cs5.livemaster.ru/storage/38/09/2ca19526b9518428fd4bfa656eoi--materialy-dlya-tvorchestva-termotransfer-tigr-v-ochkah-termoa.jpg"
                    name="Nick"/>

                <DialogItem ava="https://www.meme-arsenal.com/memes/be977322b2f450ba30c0e0083441fa9d.jpg" name="Sam"/>

                <DialogItem
                    ava="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000206/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
                    name="Piter"/>

                <DialogItem ava="https://cdn1.flamp.ru/fe8f2039f0b6422ec0d6e9a500929758.jpeg" name="Alex"/>

                <DialogItem
                    ava="https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200"
                    name="Mike"/>
            </div>

            <div className={cls.letters}>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
            </div>

        </div>
    );
}

