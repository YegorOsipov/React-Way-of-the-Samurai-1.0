import {addPost, ProfilePageTypes, ProfileReducer, updateNewPostText} from "../ProfileReducer";

test("check adding post", () => {
   const startState: ProfilePageTypes = {
       posts: [
           {id: 1, message: "Don't worry, be happy!!!", countLikes: 12},
           {id: 2, message: "The world is mine!!!", countLikes: 10},
           {id: 3, message: "Glad to see you!!!", countLikes: 6}
       ],
       newPostText: ''
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
        newPostText: ''
    }

    const newText = "New Post Text";
    const endState = ProfileReducer(startState, updateNewPostText(newText));

    expect(endState.posts.length).toBe(3);
    expect(endState.newPostText).toBe(newText);
});