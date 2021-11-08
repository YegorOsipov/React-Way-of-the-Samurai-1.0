import React from "react";
import cls from './Post.module.css';

type PropsType = {
    message: string
    countLikes: number
}

export function Post(props: PropsType) {
    return (
        <div className={cls.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                 alt="ava"/>
            <div>
                <div>{props.message}</div>
                <div className={cls.likes}>{props.countLikes} Likes</div>
            </div>
        </div>
    );
}