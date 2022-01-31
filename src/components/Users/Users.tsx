import cls from "./Users.module.css";
import {UsersItem} from "./UsersItem/UsersItem";
import noAvatar from "../../images/If_no_ava.png";
import React from "react";
import {UserType} from "../../redux/reducers/UsersReducer";

type UsersPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    changeCurrentPage: (pageNumber: number) => void
    changeFollow: (id: number, followed: boolean) => void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const changeCurrentPage = (pageNumber: number) => props.changeCurrentPage(pageNumber);

    return (
        <div className={cls.wrapper}>
            <div className={cls.pagesWrapper}>
                {pages.map(m => {
                    return (
                        <span key={m}
                              className={`${cls.page} ${props.currentPage === m ? cls.selectedPage : ""}`}
                              onClick={() => changeCurrentPage(m)}>{m}</span>
                    )
                })}
            </div>
            {props.users.map(u =>
                <UsersItem
                    key={u.id}
                    id={u.id}
                    ava={u.photos.small !== null ? u.photos.small : noAvatar}
                    status={u.status}
                    name={u.name}
                    followed={u.followed}
                    location={u.location}
                    changeFollow={props.changeFollow}
                />
            )}
        </div>
    )
}