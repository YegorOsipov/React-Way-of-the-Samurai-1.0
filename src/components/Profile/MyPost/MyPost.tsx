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
                <Post message={"Don't worry, be happy!!!"} countLikes={12}/>
                <Post message={"The world is mine!!!"} countLikes={10}/>
                <Post message={"Glad to see you!!!"} countLikes={6}/>
            </div>
        </div>
    );
}
