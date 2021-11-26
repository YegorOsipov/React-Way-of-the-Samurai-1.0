import React from "react";
import cls from "./ProFile.module.css";
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileImg} from "./ProfileImg/ProfileImg";
import {MyPostAndNewPostType} from "../../redux/state";

export function ProFile(props: MyPostAndNewPostType) {
    return (
        <div className={cls.content}>
            <ProfileImg/>
            <div className={cls.wrapper}>
                <ProfileInfo/>
                <MyPost posts={props.posts} addPost={props.addPost}/>
            </div>
        </div>
    );
}

