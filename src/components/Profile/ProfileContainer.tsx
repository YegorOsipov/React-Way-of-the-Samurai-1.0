import {ProFile} from "./ProFile";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {AppType} from "../../redux/store";
import {setUserProfile, UserProfilePropsType} from "../../redux/reducers/ProfileReducer";

export class ProfileAPIComponent extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            // debugger
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <ProFile {...this.props} profile={this.props.profile}/>
        )
    }
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    profile: UserProfilePropsType | null
}

type MapDispatchToProps = {
    setUserProfile: (profile: UserProfilePropsType) => void
}

const mapStateToProps = (state: AppType) => ({
    profile: state.ProfileReducer.profile
});

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIComponent);