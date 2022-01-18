
type ActionsType = ChangeFollowACType | SetUsersACType

export type LocationType = {
    country: string
    city: string
}

export type UserType = {
    id: number
    ava: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type UsersPageType = {
    users: Array<UserType>
}


let initialState: UsersPageType  = {
    users: []
};

export const UsersReducer = (state = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case "CHANGE-FOLLOW":
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.id ? {...m, followed: !action.payload.followed} : m)
            };

        case "SET-USERS":
            return {...state, users: [...state.users, ...action.payload.users]};
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

