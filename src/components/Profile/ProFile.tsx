import React from "react";
import cls from "./ProFile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileImg} from "./ProfileImg/ProfileImg";
import {MyPostContainer} from "./MyPost/MyPostConteiner";
import {UserProfilePropsType} from "../../redux/reducers/ProfileReducer";

type PropsType ={
    profile: UserProfilePropsType | null
}

export function ProFile(props: PropsType) {
    return (
        <div className={cls.content}>
            <ProfileImg/>
            <div className={cls.wrapper}>
                <ProfileInfo profile={props.profile}/>
                <MyPostContainer/>
            </div>
        </div>
    );
}

