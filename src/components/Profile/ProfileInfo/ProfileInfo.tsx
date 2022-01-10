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
                <div className={cls.name}>Dwayne Johnson</div>
                <div className={cls.date}>
                    <div><span>Date of Birth:</span> 02.05.1972 </div>
                    <div><span>City:</span> Miami, Florida </div>
                    <div><span>Education:</span> University of Miami </div>
                    <div><span>WebSite:</span> https://en.wikipedia.org/wiki/Dwayne_Johnson </div>
                </div>
            </div>
        </div>
    )
}