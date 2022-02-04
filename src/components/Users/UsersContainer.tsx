import {connect} from "react-redux";
import {AppType} from "../../redux/store";
import {
    changeCurrentPage,
    changeFollow,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    UserType
} from "../../redux/reducers/UsersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import cls from "./Users.module.css"
import {Preloader} from "../Preloader/Preloader";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    changeFollow: (id: number, followed: boolean) => void
    setUsers: (users: Array<UserType>) => void
    changeCurrentPage: (newValue: number) => void
    setUsersTotalCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        })
    }

    changeCurrentPage = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.changeCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        })
    }

    render = () => {
        return (
            <div className={cls.wrapper}>
                {/*{this.props.isFetching ? <img src={preloader} alt="preloader"/> : null}*/}
                {this.props.isFetching ?
                <Preloader /> :
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    changeCurrentPage={this.changeCurrentPage}
                    changeFollow={this.props.changeFollow}
                />}
            </div>
        )
    }
}

const mapStateToProps = (state: AppType) => {
    return {
        users: state.UsersReducer.users,
        pageSize: state.UsersReducer.pageSize,
        totalUsersCount: state.UsersReducer.totalUsersCount,
        currentPage: state.UsersReducer.currentPage,
        isFetching: state.UsersReducer.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps, {
    changeFollow, setUsers, changeCurrentPage, setUsersTotalCount,
    toggleIsFetching
})(UsersAPIComponent);

