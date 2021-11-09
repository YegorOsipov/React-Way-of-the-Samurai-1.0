import React from "react";
import cls from "./Dialogs.module.css";

export function Dialogs() {
    return (
        <div className={cls.wrapper}>
            <div className={cls.names}>
                <div className={cls.title}>DIALOGS</div>
                <div className={cls.names__item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU" alt="ava"/>
                    <span>Lev</span>
                </div>
                
                <div className={cls.names__item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU" alt="ava"/>
                    <span>Egor</span>
                </div>
                
                <div className={cls.names__item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU" alt="ava"/>
                    <span>David</span>
                </div>
               
                <div className={cls.names__item}>
                    <img src="https://klike.net/uploads/posts/2019-03/1551511808_5.jpg" alt="ava"/>
                    <span>Julia</span>
                </div>
                
                <div className={cls.names__item}>
                    <img src="https://klike.net/uploads/posts/2019-03/1551511808_5.jpg" alt="ava"/>
                    <span>Sveta</span>
                </div>
               
                <div className={cls.names__item}>
                    <img src="https://klike.net/uploads/posts/2019-03/1551511808_5.jpg" alt="ava"/>
                    <span>Lena</span>
                </div>
                
                <div className={cls.names__item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU" alt="ava"/>
                    <span>Vasya</span>
                </div>
                
                <div className={cls.names__item}>
                    <img src="https://klike.net/uploads/posts/2019-03/1551511808_5.jpg" alt="ava"/>
                    <span>Masha</span>
                </div>
            </div>
            <div className={cls.letters}>
                <div className={cls.lettres__item}>
                    <div className={cls.ava__wrapper}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU" alt="ava"/>
                        <div>Имя</div>
                    </div>
                    <div>
                        <div className={cls.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, voluptatum.</div>
                    </div>
                </div>

                <div className={cls.lettres__item}>
                    <div className={cls.ava__wrapper}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU" alt="ava"/>
                        <div>Имя</div>
                    </div>
                    <div>
                        <div className={cls.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, voluptatum.</div>
                    </div>
                </div>

                <div className={cls.lettres__item}>
                    <div className={cls.ava__wrapper}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU" alt="ava"/>
                        <div>Имя</div>
                    </div>
                    <div>
                        <div className={cls.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, voluptatum.</div>
                    </div>
                </div>

                <div className={cls.lettres__item}>
                    <div className={cls.ava__wrapper}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU" alt="ava"/>
                        <div>константин</div>
                    </div>
                    <div>
                        <div className={cls.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, voluptatum.</div>
                    </div>
                </div>

                <div className={cls.lettres__item}>
                    <div className={cls.ava__wrapper}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU" alt="ava"/>
                        <div>Имя</div>
                    </div>
                    <div>
                        <div className={cls.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, voluptatum.</div>
                    </div>
                </div>


            </div>
        </div>
    );
}