import React from "react";
import cls from "./UsersItem.module.css"
import {LocationType} from "../../../redux/reducers/UsersReducer";

type UsersItemType = {
    id: number
    ava: string
    follow: boolean
    name: string
    status: string
    location: LocationType
    changeFollow: (id: number, follow: boolean) => void
}

export function UsersItem(props: UsersItemType) {

    const changeFollow = () => {
        props.changeFollow(props.id, props.follow);
    }

    return (
        <div className={cls.users_item_wrapper}>
            <div>
                <img className={cls.image} src={props.ava} alt="avatar"/>
                <div>
                    <button onClick={changeFollow} className={props.follow ? cls.btn_unfollow : cls.btn_follow}>
                        {props.follow ? "unfollow" : "follow"}
                    </button>
                </div>
            </div>

            <div>
                <div className={cls.info}>
                    <div className={cls.name}>{props.name}</div>
                    <div className={cls.status}>{props.status}</div>
                    <div className={cls.location}>
                        <div>
                            {props.location.country},
                        </div>
                        <div className={cls.city}>
                            {props.location.city}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}