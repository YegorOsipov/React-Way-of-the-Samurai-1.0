import {connect} from "react-redux";
import {Users} from "./Users";
import {AppType} from "../../redux/store";
import {ChangeFollowAC, UserType} from "../../redux/reducers/UsersReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    changeFollow: (id: number, follow: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppType) => {
    return {
        users: state.UsersReducer.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeFollow: (id: number, follow: boolean) => dispatch(ChangeFollowAC(id, follow))
    }
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);