import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {DataType, setUserData} from "../../redux/reducers/AuthReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component <HeaderPropsType> {
    componentDidMount() {
        // this.props.toggleIsFetching(true);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
        //     // debugger;
        //     // console.log(this.props.data.isAuth);
        //     if (response.data.resultCode === 0) {
        //         let {id, login, email} = response.data.data
        //         this.props.setUserData(login);
        //     }
        // })
    }

    render() {
        return (
           <Header {...this.props}/>
        );
    }
}

type MapStateToProps = {
    data: DataType,
    isAuth: boolean
}
type MapDispatchToProps = {
    setUserData: (data: DataType) => void
}

export type HeaderPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: MapStateToProps) => {
    // debugger;
    return {
        data: state.data,
        isAuth: false
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer);