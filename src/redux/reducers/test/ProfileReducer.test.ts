import {
    addPost,
    ProfilePageTypes,
    ProfileReducer,
    setUserProfile,
    updateNewPostText,
    UserProfilePropsType
} from "../ProfileReducer";

test("check adding post", () => {
   const startState: ProfilePageTypes = {
       posts: [
           {id: 1, message: "Don't worry, be happy!!!", countLikes: 12},
           {id: 2, message: "The world is mine!!!", countLikes: 10},
           {id: 3, message: "Glad to see you!!!", countLikes: 6}
       ],
       newPostText: '',
       profile: {
           fullName: '',
           aboutMe: null,
           contacts: {
               facebook: null,
               github: null,
               instagram: null,
               mainLink: null,
               twitter: null,
               vk: null,
               website: null,
               youtube: null,
           },
           lookingForAJob: true,
           lookingForAJobDescription: '',
           photos: {large: null, small: null}
       }
   }

   const newPostText = "New Post Text";
   const endState = ProfileReducer(startState, addPost(newPostText));

   expect(endState.posts.length).toBe(4);
   expect(endState.posts[0].message).toBe(newPostText);
});

test("check update newPostText", () => {
    const startState: ProfilePageTypes = {
        posts: [
            {id: 1, message: "Don't worry, be happy!!!", countLikes: 12},
            {id: 2, message: "The world is mine!!!", countLikes: 10},
            {id: 3, message: "Glad to see you!!!", countLikes: 6}
        ],
        newPostText: '',
        profile: {
            fullName: '',
            aboutMe: null,
            contacts: {
                facebook: null,
                github: null,
                instagram: null,
                mainLink: null,
                twitter: null,
                vk: null,
                website: null,
                youtube: null,
            },
            lookingForAJob: true,
            lookingForAJobDescription: '',
            photos: {large: null, small: null}
        }
    }

    const newText = "New Post Text";
    const endState = ProfileReducer(startState, updateNewPostText(newText));

    expect(endState.posts.length).toBe(3);
    expect(endState.newPostText).toBe(newText);
});

test("check changing user profile", () => {
    const startState: ProfilePageTypes = {
        posts: [
            {id: 1, message: "Don't worry, be happy!!!", countLikes: 12},
            {id: 2, message: "The world is mine!!!", countLikes: 10},
            {id: 3, message: "Glad to see you!!!", countLikes: 6}
        ],
        newPostText: '',
        profile: null
        // profile: {
        //     fullName: '',
        //     aboutMe: null,
        //     contacts: {
        //         facebook: null,
        //         github: null,
        //         instagram: null,
        //         mainLink: null,
        //         twitter: null,
        //         vk: null,
        //         website: null,
        //         youtube: null,
        //     },
        //     lookingForAJob: true,
        //     lookingForAJobDescription: '',
        //     photos: {large: null, small: null}
        // }
    }
    const newProfile: UserProfilePropsType = {
            fullName: '',
            aboutMe: null,
            contacts: {
                facebook: null,
                github: null,
                instagram: null,
                mainLink: null,
                twitter: null,
                vk: null,
                website: null,
                youtube: null,
            },
            lookingForAJob: true,
            lookingForAJobDescription: '',
            photos: {large: null, small: null}
        }
    const endState = ProfileReducer(startState, setUserProfile(newProfile));

    expect(endState.posts.length).toBe(3);
    expect(endState.profile).toBe(newProfile);
    expect(endState.profile?.photos.large).toBe(null);
});