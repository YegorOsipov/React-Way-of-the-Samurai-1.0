import {connect} from "react-redux";
import {Users} from "./Users";
import {AppType} from "../../redux/store";
import {ChangeFollowAC, SetUsersAC, UserType} from "../../redux/reducers/UsersReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    changeFollow: (id: number, followed: boolean) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppType) => {
    return {
        users: state.UsersReducer.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeFollow: (id: number, followed: boolean) => dispatch(ChangeFollowAC(id, followed)),
        setUsers: (users: Array<UserType>) => dispatch(SetUsersAC(users))
    }
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);