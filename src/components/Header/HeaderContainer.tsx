import LogoSrc from "../../images/logo.png";
import React from "react";
import cls from "./Header.module.css";
import {Header} from "./Header";
import axios from "axios";
import {DataType, SetUserDataType} from "../../redux/reducers/AuthReducer";
import { connect } from "react-redux";
import {SetUsersType} from "../../redux/reducers/UsersReducer";

class HeaderContainer extends React.Component <HeaderPropsType> {
    componentDidMount() {
        // this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            debugger;
        })
    }

    render() {
        return (
           <Header {...this.props}/>
        );
    }
}

type MapStateToProps = {
    data: DataType
}
type MapDispatchToProps = {
    setUserData: (data: DataType) => void
}

export type HeaderPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: MapStateToProps) => {}

export default connect(mapStateToProps, {})(HeaderContainer);