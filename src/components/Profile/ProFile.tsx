import React from "react";
import cls from "./ProFile.module.css";
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileImg} from "./ProfileImg/ProfileImg";
import {ActionsType, ProfilePageTypes} from "../../redux/state";

type ProfileType = {
    posts: ProfilePageTypes
    dispatch: (action: ActionsType) => void
}

export function ProFile(props: ProfileType) {
    return (
        <div className={cls.content}>
            <ProfileImg/>
            <div className={cls.wrapper}>
                <ProfileInfo/>
                <MyPost posts={props.posts} dispatch={props.dispatch}  newPostText={props.posts.newPostText}/>
            </div>
        </div>
    );
}

