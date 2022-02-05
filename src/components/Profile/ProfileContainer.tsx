import {ProFile} from "./ProFile";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {AppType} from "../../redux/store";
import {setUserProfile, UserProfilePropsType} from "../../redux/reducers/ProfileReducer";
import {useParams} from "react-router-dom";

export class ProfileAPIComponent extends React.Component<ProfilePropsType> {
    componentDidMount() {
        const userId = this.props.params
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
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

export type ProfilePropsType = MapStateToPropsType & MapDispatchToProps & ParamsType

type MapStateToPropsType = {
    profile: UserProfilePropsType | null
}

type MapDispatchToProps = {
    setUserProfile: (profile: UserProfilePropsType) => void
}

type ParamsType = {
    params: string
}

const mapStateToProps = (state: AppType) => ({
    profile: state.ProfileReducer.profile
});


const withRouter = (Component: typeof React.Component) => {
    return (props: object) => {
        const params = useParams();

        return (
            <Component {...props} params={params}/>
        )
    }
}

const ProfileContainerUrl = withRouter(ProfileAPIComponent);
export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerUrl);