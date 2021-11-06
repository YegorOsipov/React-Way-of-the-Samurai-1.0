import LogoSrc from "../images/logo.png";
import React from "react";

export function Header() {
    return (
        <header className={'header'}>
            <img className={'logo'} src={LogoSrc} alt={'logo'}/>
        </header>
    );
}