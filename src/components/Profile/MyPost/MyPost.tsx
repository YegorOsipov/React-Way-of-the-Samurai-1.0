import React from "react";
import cls from './MyPost.module.css';
import {Post} from "./Post/Post";
import {ProfilePageTypes} from "../../../redux/state";

export function MyPost(props: ProfilePageTypes) {
    const postsElements = props.posts.map(el => (<Post message={el.message} countLikes={el.countLikes} id={el.id}/>))

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
