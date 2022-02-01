type ActionsType = ChangeFollowType | SetUsersType | ChangeCurrentPageType | SetUsersTotalCountType | ToggleIsFetchingType

export type LocationType = {
    country: string
    city: string
}
export type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

export const UsersReducer = (state = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case "CHANGE-FOLLOW":
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.id ? {...m, followed: !action.payload.followed} : m)
            };

        case "SET-USERS":
            return {...state, users: action.payload.users};

        case "CHANGE-CURRENT-PAGE":
            return {...state, currentPage: action.payload.newValue};

        case "SET-USERS-TOTAL-COUNT":
            return {...state, totalUsersCount: action.payload.totalUsersCount};

        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching};
        default:
            return state;
    }
};

export type ChangeFollowType = ReturnType<typeof changeFollow>
export const changeFollow = (id: number, followed: boolean) => {
    return {
        type: "CHANGE-FOLLOW",
        payload: {
            id,
            followed
        }
    } as const
}

export type SetUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        payload: {
            users
        }
    } as const
}

export type ChangeCurrentPageType = ReturnType<typeof changeCurrentPage>
export const changeCurrentPage = (newValue: number) => {
    return {
        type: "CHANGE-CURRENT-PAGE",
        payload: {
            newValue
        }
    } as const
}

export type SetUsersTotalCountType = ReturnType<typeof setUsersTotalCount>
export const setUsersTotalCount = (totalUsersCount: number) => {
    return {
        type: "SET-USERS-TOTAL-COUNT",
        payload: {
            totalUsersCount
        }
    } as const
}

export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        payload: {
            isFetching
        }
    } as const
}

