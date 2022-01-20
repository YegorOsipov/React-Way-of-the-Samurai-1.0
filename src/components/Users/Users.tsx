import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {UsersItem} from "./UsersItem/UsersItem";
import cls from "./Users.module.css"
import noAvatar from "../../images/If_no_ava.png";
import axios from "axios";

export function Users(props: UsersPropsType) {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            // debugger
            props.setUsers(response.data.items);
        });
    }


    let mapUsers = props.users.map(u => <UsersItem key={u.id}
                                                   id={u.id}
                                                   ava={u.photos.small !== null ? u.photos.small : noAvatar}
                                                   status={u.status}
                                                   name={u.name}
                                                   followed={u.followed}
                                                   location={u.location}
                                                   changeFollow={props.changeFollow}/>)

    return (

        <div className={cls.wrapper}>
            {mapUsers}
        </div>
    )
}

