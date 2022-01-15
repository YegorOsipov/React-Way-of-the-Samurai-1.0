import {AppType} from "../../../redux/store";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/reducers/ProfileReducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {PostTypes} from "./Post/Post";
import {Dispatch} from "redux";

// export function MyPostContainer() {
//     const newPostText = props.store.getState().profilePage.newPostText
//     const addPost = () => props.store.dispatch(AddPostAC(newPostText));
//     const onPostChange = (newValue: string) => props.store.dispatch(UpdateNewPostTextAC(newValue));
//
//
//     return (
//         <MyPost
//             posts={props.store.getState().profilePage.posts}
//             onPostChange={onPostChange}
//             newPostText={newPostText}
//             addPost={addPost}
//         />
//     );
// }

type MapStateToPropsTypes = {
    posts: Array<PostTypes>
    newPostText: string
}
type MapDispatchToProps = {
    addPost: (newPostText: string) => void
    onPostChange: (newValue: string) => void
}
export type MyPostPropsType = MapStateToPropsTypes & MapDispatchToProps

const mapStateToProps = (state: AppType): MapStateToPropsTypes => {
    return {
        posts: state.ProfileReducer.posts,
        newPostText: state.ProfileReducer.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: (newPostText: string) => dispatch(AddPostAC(newPostText)),
        onPostChange: (newValue: string) => dispatch(UpdateNewPostTextAC(newValue))
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
