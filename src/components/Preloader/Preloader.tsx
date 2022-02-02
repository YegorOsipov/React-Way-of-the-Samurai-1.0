import preloader from "../../images/preloader.svg";
import React from "react";
import cls from "./Preloader.module.css"

type PreloaderPropsType = {
    isFetching: boolean
}
export const Preloader = (props: PreloaderPropsType) => {
    return (
        props.isFetching ? <img className={cls.preloaderImg} src={preloader} alt="preloader"/> : null
    )
}