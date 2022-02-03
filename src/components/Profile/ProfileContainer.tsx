import {ProFile} from "./ProFile";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {AppType} from "../../redux/store";
import {setUserProfile} from "../../redux/reducers/ProfileReducer";
import {PostTypes} from "./MyPost/Post/Post";

export class ProfileAPIComponent extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <ProFile/>
        )
    }
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToProps


type MapStateToPropsType = {
    posts: Array<PostTypes>
    newPostText: string
    profile: any
}

type MapDispatchToProps = {
    setUserProfile: (profile: {}) => void
}

const mapStateToProps = (state: AppType) => ({
    profile: state.ProfileReducer.profile
});

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIComponent);