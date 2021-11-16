import React from "react";
import cls from './MyPost.module.css';
import {Post} from "./Post/Post";

export function MyPost() {
    const posts = [
        {id: 1, message: "Don't worry, be happy!!!", countLikes: 12},

        {id: 2, message: "The world is mine!!!", countLikes: 10},

        {id: 3, message: "Glad to see you!!!", countLikes: 6}
    ];

    const postsElements = posts.map(el => (<Post message={el.message} countLikes={el.countLikes} id={el.id}/>))

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
                {postsElements}
            </div>
        </div>
    );
}
