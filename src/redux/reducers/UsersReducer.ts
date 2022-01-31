type ActionsType = ChangeFollowACType | SetUsersACType | ChangeCurrentPageACType | SetUsersTotalCountACType

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
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state;
    }
};

export type ChangeFollowACType = ReturnType<typeof ChangeFollowAC>
export const ChangeFollowAC = (id: number, followed: boolean) => {
    return {
        type: "CHANGE-FOLLOW",
        payload: {
            id,
            followed
        }
    } as const
}

export type SetUsersACType = ReturnType<typeof SetUsersAC>
export const SetUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        payload: {
            users
        }
    } as const
}

export type ChangeCurrentPageACType = ReturnType<typeof ChangeCurrentPageAC>
export const ChangeCurrentPageAC = (newValue: number) => {
    return {
        type: "CHANGE-CURRENT-PAGE",
        payload: {
            newValue
        }
    } as const
}

export type SetUsersTotalCountACType = ReturnType<typeof SetUsersTotalCountAC>
export const SetUsersTotalCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-USERS-TOTAL-COUNT",
        payload: {
            totalUsersCount
        }
    } as const
}

