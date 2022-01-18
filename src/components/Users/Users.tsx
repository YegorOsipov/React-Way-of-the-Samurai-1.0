import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {UsersItem} from "./UsersItem/UsersItem";
import cls from "./Users.module.css"

export function Users(props: UsersPropsType) {
    let mapUsers = props.users.map(u => <UsersItem key={u.id}
                                                   id={u.id}
                                                   ava={u.ava}
                                                   status={u.status}
                                                   name={u.name}
                                                   follow={u.follow}
                                                   location={u.location}
                                                   changeFollow={props.changeFollow}/>)

    return (

        <div className={cls.wrapper}>
            {mapUsers}
        </div>
    )
}

