import {ActionsType, PostTypes, ProfilePageTypes} from "../state";

export const ProfileReducer = (state: ProfilePageTypes, action: ActionsType) => {
    if (action.type === "ADD-POST") {
        let newPost: PostTypes = {id: 5, message: action.newPostText, countLikes: 0};
        state.posts.push(newPost);
        state.newPostText = '';
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.newPostText = action.newText;
    }
    return state;

};

// export type ProfileActionsType = AddPostActionType | UpdateNewPostTextActionType

// type AddPostActionType = ReturnType<typeof AddPostAC>
export const AddPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}

// type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextAC>
export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}
