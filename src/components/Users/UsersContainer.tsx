import {connect} from "react-redux";
import {AppType} from "../../redux/store";
import {
    ChangeCurrentPageAC,
    ChangeFollowAC,
    SetUsersAC,
    SetUsersTotalCountAC,
    UserType
} from "../../redux/reducers/UsersReducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    changeFollow: (id: number, followed: boolean) => void
    setUsers: (users: Array<UserType>) => void
    changeCurrentPage: (newValue: number) => void
    setUsersTotalCount: (totalUsersCount: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        })
    }

    changeCurrentPage = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render = () => {
        return (
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changeCurrentPage={this.changeCurrentPage}
                changeFollow={this.props.changeFollow}
            />
        )
    }
}


const mapStateToProps = (state: AppType) => {
    return {
        users: state.UsersReducer.users,
        pageSize: state.UsersReducer.pageSize,
        totalUsersCount: state.UsersReducer.totalUsersCount,
        currentPage: state.UsersReducer.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeFollow: (id: number, followed: boolean) => dispatch(ChangeFollowAC(id, followed)),
        setUsers: (users: Array<UserType>) => dispatch(SetUsersAC(users)),
        changeCurrentPage: (pageNumber: number) => dispatch(ChangeCurrentPageAC(pageNumber)),
        setUsersTotalCount: (totalUsersCount: number) => dispatch(SetUsersTotalCountAC(totalUsersCount))
    }
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);