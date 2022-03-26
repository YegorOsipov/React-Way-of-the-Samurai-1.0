const SET_USER_DATA = "SET-USER-DATA";

export type DataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: DataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state = initialState, action: SetUserDataType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true};
        default: return state;
    }
};

export type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (data: DataType) => {
    return {
        type: SET_USER_DATA,
        data
    }
}
