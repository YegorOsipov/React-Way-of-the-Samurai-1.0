import React from "react";
import cls from './Post.module.css';

export function Post() {
    return (
        <div className={cls.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                 alt="ava"/>
            <div>post1</div>
        </div>
    );
}