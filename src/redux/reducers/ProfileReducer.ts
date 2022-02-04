import {PostTypes} from "../../components/Profile/MyPost/Post/Post";

type PhotosType = {
    large: string | null
    small: string | null
}

export type ContactsType = {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: string | null
    twitter: string | null
    vk: string | null
    website: string | null
    youtube: string | null
}

export type UserProfilePropsType = {
    fullName: string
    aboutMe: string | null
    contacts: ContactsType
    lookingForAJob: true
    lookingForAJobDescription: string | null
    photos: PhotosType
}

export type ProfilePageTypes = {
    posts: Array<PostTypes>
    newPostText: string
    profile: UserProfilePropsType | null
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
    profile: null
}

export const ProfileReducer = (state = initialState, action: ActionsType): ProfilePageTypes => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostTypes = {id: 5, message: action.newPostText, countLikes: 0};
            return {...state, posts: [newPost, ...state.posts], newPostText: ""};

        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText};

        case "SET-USER-PROFILE":
            return {...state, profile: action.profile};
        default: return state;
    }


};

export const addPost = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText,
    } as const
}

export const updateNewPostText = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText,
    } as const
}

export const setUserProfile = (profile: UserProfilePropsType) => {
    return {
        type: "SET-USER-PROFILE",
        profile,
    } as const
}
