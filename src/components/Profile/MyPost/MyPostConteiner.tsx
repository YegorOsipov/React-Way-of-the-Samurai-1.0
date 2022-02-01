import {AppType} from "../../../redux/store";
import {addPost, updateNewPostText} from "../../../redux/reducers/ProfileReducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {PostTypes} from "./Post/Post";

type MapStateToPropsTypes = {
    posts: Array<PostTypes>
    newPostText: string
}
type MapDispatchToProps = {
    addPost: (newPostText: string) => void
    updateNewPostText: (newValue: string) => void
}
export type MyPostPropsType = MapStateToPropsTypes & MapDispatchToProps

const mapStateToProps = (state: AppType): MapStateToPropsTypes => {
    return {
        posts: state.ProfileReducer.posts,
        newPostText: state.ProfileReducer.newPostText
    }
}

export const MyPostContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPost);
