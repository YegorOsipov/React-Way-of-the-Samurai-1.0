import {ActionsType, PostTypes, ProfilePageTypes} from "../state";

let initialState: ProfilePageTypes = {
    posts: [
        {id: 1, message: "Don't worry, be happy!!!", countLikes: 12},
        {id: 2, message: "The world is mine!!!", countLikes: 10},
        {id: 3, message: "Glad to see you!!!", countLikes: 6}
    ],
    newPostText: ''
}

export const ProfileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostTypes = {id: 5, message: action.newPostText, countLikes: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
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
