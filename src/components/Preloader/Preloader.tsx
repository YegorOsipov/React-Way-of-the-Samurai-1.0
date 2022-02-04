import preloader from "../../images/preloader.svg";
import React from "react";
import cls from "./Preloader.module.css"

export const Preloader = () => {
    return (
        <img className={cls.preloaderImg} src={preloader} alt="preloader"/>
    )
}