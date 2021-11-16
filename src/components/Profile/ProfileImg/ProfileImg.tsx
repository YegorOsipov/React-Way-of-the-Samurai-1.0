import cls from "./ProfileImg.module.css";
import ImageWall from "./img/mountain.jpg";
import React from "react";

export function ProfileImg() {
    return (
        <div className={cls.imgWrapper}>
            <img
                src={ImageWall}
                alt="mountain"/>
        </div>
    )
}