import preloader from "../../images/preloader.gif";
import React from "react";

type PreloaderPropsType = {
    isFetching: boolean
}
export const Preloader = (props: PreloaderPropsType) => {
    return (
        props.isFetching ? <img src={preloader} alt="preloader"/> : null
    )
}