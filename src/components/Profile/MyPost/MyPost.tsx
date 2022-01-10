import React from "react";
import cls from './MyPost.module.css';
import {Post} from "./Post/Post";
import {ActionsType, AddPostAC, ProfilePageTypes, UpdateNewPostTextAC} from "../../../redux/state";

type MyPostType = {
    posts: ProfilePageTypes
    dispatch: (action: ActionsType) => void
    newPostText: string
}


export function MyPost(props: MyPostType) {
    const postsElements = props.posts.posts.map(el => (<Post key={el.id} message={el.message} countLikes={el.countLikes} id={el.id}/>));

    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (newPostElement.current) props.dispatch(AddPostAC(props.newPostText));

    }

    const onPostChange = () => {
        if (newPostElement.current) props.dispatch(UpdateNewPostTextAC(newPostElement.current.value));
    }


    return (
        <div className="my_post">
            My posts
            <div>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
                    className={cls.area}
                    placeholder="your news..."
                />
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
