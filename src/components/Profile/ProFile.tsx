import React from "react";
import cls from "./ProFile.module.css";
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileImg} from "./ProfileImg/ProfileImg";
import {posts} from "../../index";

export function ProFile() {
    return (
        <div className={cls.content}>
            <ProfileImg/>
            <div className={cls.wrapper}>
                <ProfileInfo/>
                <MyPost posts={posts}/>
            </div>
        </div>
    );
}

