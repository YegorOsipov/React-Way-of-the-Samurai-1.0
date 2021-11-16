import cls from "./ProfileInfo.module.css";
import React from "react";

export function ProfileInfo() {
    return (
        <div className={cls.wrapperWall}>
            <div>
                <img className={cls.avatar}
                     src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt="ava"/>

            </div>
            <div className={cls.descr}>
                <div className={cls.name}>Name Surname</div>
                <div className={cls.date}>
                    <div>Date of Birth</div>
                    <div>City</div>
                    <div>Education</div>
                    <div>Web Site</div>
                </div>
            </div>
        </div>
    )
}