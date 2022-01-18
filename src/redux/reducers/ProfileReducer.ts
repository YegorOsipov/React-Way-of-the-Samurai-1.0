import {PostTypes} from "../../components/Profile/MyPost/Post/Post";
export type ProfilePageTypes = {
    posts: Array<PostTypes>
    newPostText: string
}

type ActionsType = AddPostActionType | UpdateNewPostTextActionType
export type AddPostActionType = ReturnType<typeof AddPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextAC>

let initialState: ProfilePageTypes = {
    posts: [
        {id: 1, message: "Don't worry, be happy!!!", countLikes: 12},
        {id: 2, message: "The world is mine!!!", countLikes: 10},
        {id: 3, message: "Glad to see you!!!", countLikes: 6}
    ],
    newPostText: ''
}

export const ProfileReducer = (state = initialState, action: ActionsType): ProfilePageTypes => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostTypes = {id: 5, message: action.newPostText, countLikes: 0};
            return {...state, posts: [newPost, ...state.posts], newPostText: ""};

        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText};
    }
    return state;

};

export const AddPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}

export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}
