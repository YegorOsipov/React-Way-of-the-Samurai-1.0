import React from "react";
import cls from "./ProFile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileImg} from "./ProfileImg/ProfileImg";
import {StoreType} from "../../redux/state";
import {MyPostContainer} from "./MyPost/MyPostConteiner";

type ProfileType = {
    store: StoreType
}

export function ProFile(props: ProfileType) {
    return (
        <div className={cls.content}>
            <ProfileImg/>
            <div className={cls.wrapper}>
                <ProfileInfo/>
                <MyPostContainer store={props.store}/>
            </div>
        </div>
    );
}

