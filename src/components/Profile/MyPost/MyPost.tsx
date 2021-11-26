import React from "react";
import cls from './MyPost.module.css';
import {Post} from "./Post/Post";
import {MyPostAndNewPostType} from "../../../redux/state";


export function MyPost(props: MyPostAndNewPostType) {
    const postsElements = props.posts.map(el => (<Post message={el.message} countLikes={el.countLikes} id={el.id}/>))

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        let text = newPostElement.current?.value;
        if (text) {
            props.addPost(text);
        }
        if (newPostElement.current) {
            newPostElement.current.value = '';
        }
    }


    return (
        <div className="my_post">
            My posts
            <div>
                <textarea ref={newPostElement} className={cls.area} placeholder="your news..."/>
            </div>
            <div className={cls.btnWrapper}>
                <button onClick={addPost} className={cls.btn}>Send</button>
            </div>
            <div className={cls.posts}>
                {postsElements}
            </div>
        </div>
    );
}
