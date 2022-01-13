import React from "react";
import {StoreType} from "../../../redux/state";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/reducers/ProfileReducer";
import {MyPost} from "./MyPost";

type MyPostContainerType = {
    store: StoreType
}

export function MyPostContainer(props: MyPostContainerType) {
    const newPostText = props.store.getState().profilePage.newPostText
    const addPost = () => props.store.dispatch(AddPostAC(newPostText));
    const onPostChange = (newValue: string) => props.store.dispatch(UpdateNewPostTextAC(newValue));


    return (
        <MyPost
            posts={props.store.getState().profilePage.posts}
            onPostChange={onPostChange}
            newPostText={newPostText}
            addPost={addPost}
        />
    );
}
