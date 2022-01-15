import React from "react";
import cls from "./ProFile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileImg} from "./ProfileImg/ProfileImg";
import {MyPostContainer} from "./MyPost/MyPostConteiner";

// type ProfileType = {
//     store: StoreType
// }

export function ProFile() {
    return (
        <div className={cls.content}>
            <ProfileImg/>
            <div className={cls.wrapper}>
                <ProfileInfo/>
                <MyPostContainer/>
            </div>
        </div>
    );
}

