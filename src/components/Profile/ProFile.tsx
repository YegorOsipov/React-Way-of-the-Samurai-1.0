import React from "react";
import ImageWall from "../../images/mountain.jpg";
import cls from "./ProFile.module.css";
import {MyPost} from "./MyPost/MyPost";

export function ProFile() {
    return (
        <div className={cls.content}>
            <div className={cls.imgWrapper}>
                <img
                     src={ImageWall}
                     alt="mountain"/>
            </div>
            <div className={cls.wrapper}>
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
                <MyPost />
            </div>
        </div>
    );
}