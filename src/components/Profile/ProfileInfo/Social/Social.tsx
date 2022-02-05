import {ContactsType} from "../../../../redux/reducers/ProfileReducer";
import cls from "./Social.module.css";
import fb from "../../../../images/social/fb.svg";
import inst from "../../../../images/social/instagram.svg";
import twitter from "../../../../images/social/twitter.svg";
import youtube from "../../../../images/social/youTube.svg";
import vk from "../../../../images/social/vk.svg";
import git from "../../../../images/social/git.svg";
import React from "react";

type SocialPropsType = {
    contacts: ContactsType
}
export const Social = (props: SocialPropsType) => {
    return (
        <div className={cls.social}>
            {props.contacts.facebook &&
            <a href={props.contacts.facebook} target={"_blank"} rel={"noreferrer"}>
                <img src={fb} alt="facebook"/>
            </a>}

            {props.contacts.instagram &&
            <a href={props.contacts.instagram} target={"_blank"} rel={"noreferrer"}>
                <img src={inst} alt="instagram"/>
            </a>}

            {props.contacts.twitter &&
            <a href={props.contacts.twitter} target={"_blank"} rel={"noreferrer"}>
                <img src={twitter} alt="twitter"/>
            </a>}

            {props.contacts.youtube &&
            <a href={props.contacts.youtube} target={"_blank"} rel={"noreferrer"}>
                <img src={youtube} alt="youtube"/>
            </a>}

            {props.contacts.vk &&
            <a href={props.contacts.vk} target={"_blank"} rel={"noreferrer"}>
                <img src={vk} alt="vk"/>
            </a>}

            {props.contacts.github &&
            <a href={props.contacts.github} target={"_blank"} rel={"noreferrer"}>
                <img src={git} alt="git"/>
            </a>}
        </div>
    )
}