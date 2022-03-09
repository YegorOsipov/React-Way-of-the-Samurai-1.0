const SET_USER_DATA = "SET-USER-DATA";

export type DataType = {
    userId: number | null
    email: string | null
    login: string | null
}

const initialState: DataType = {
    userId: null,
    email: null,
    login: null,
}

export const AuthReducer = (state = initialState, action: setUserDataType): DataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data};
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
