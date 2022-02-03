import {PostTypes} from "../../components/Profile/MyPost/Post/Post";
import {ProfileAPIComponent} from "../../components/Profile/ProfileContainer";
export type ProfilePageTypes = {
    posts: Array<PostTypes>
    newPostText: string
    profile: {}
}

type ActionsType = AddPostActionType | UpdateNewPostTextActionType | setUserProfileType
export type AddPostActionType = ReturnType<typeof addPost>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>
type setUserProfileType = ReturnType<typeof setUserProfile>

let initialState: ProfilePageTypes = {
    posts: [
        {id: 1, message: "Don't worry, be happy!!!", countLikes: 12},
        {id: 2, message: "The world is mine!!!", countLikes: 10},
        {id: 3, message: "Glad to see you!!!", countLikes: 6}
    ],
    newPostText: '',
    profile: {}
}

export const ProfileReducer = (state = initialState, action: ActionsType): ProfilePageTypes => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostTypes = {id: 5, message: action.newPostText, countLikes: 0};
            return {...state, posts: [newPost, ...state.posts], newPostText: ""};

        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText};

        case "SET-USERS-PROFILE":
            return {...state, profile: action.payload.profile};
        default: return state;
    }


};

export const addPost = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}

export const updateNewPostText = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}

export const setUserProfile = (profile: {}) => {
    return {
        type: "SET-USERS-PROFILE",
        payload : {
            profile
        }
    } as const
}
