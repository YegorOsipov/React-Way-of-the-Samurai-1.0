import React from "react";
import cls from './MyPost.module.css';
import {Post} from "./Post/Post";

export function MyPost() {
    return (
        <div className="my_post">
            My posts
            <div>
                <textarea className={cls.area} placeholder="your news..."/>
            </div>
            <div className={cls.btnWrapper}>
                <button className={cls.btn}>Send</button>
            </div>
            <div className={cls.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}