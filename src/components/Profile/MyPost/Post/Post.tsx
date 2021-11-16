import React from "react";
import cls from './Post.module.css';

export type PostType = {
    message: string
    countLikes: number
    id: number
}

export function Post(props: PostType) {
    return (
        <div className={cls.item}>
            <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
                 alt="ava"/>
            <div>
                <div>{props.message}</div>
                <div className={cls.likes}>{props.countLikes} Likes</div>
            </div>
        </div>
    );
}