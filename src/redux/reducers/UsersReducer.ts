
type ActionsType = ChangeFollowACType | SetUsersACType

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

// {
//     id: 1,
//         ava: "https://i.pinimg.com/originals/68/51/b6/6851b67f79f054717ec8f2f3208e9b5a.jpg",
//     followed: true,
//     name: "Leon Goretzka",
//     status: "My life my rules",
//     location: {country: "Germany", city: "Munich"}
// },
// {
//     id: 2,
//         ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoqGqblOUNUHPHD-hrqk-Xhv3_aJJis4DKw&usqp=CAU",
//     followed: true,
//     name: "David Beckham",
//     status: "Now or never",
//     location: {country: "England", city: "London"}
// },
// {
//     id: 3,
//         ava: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",
//     followed: true,
//     name: "Sergio Aguero",
//     status: "I’ll get everything I want",
//     location: {country: "Spain", city: "Barcelona"}
// },
// {
//     id: 4,
//         ava: "https://cs5.livemaster.ru/storage/38/09/2ca19526b9518428fd4bfa656eoi--materialy-dlya-tvorchestva-termotransfer-tigr-v-ochkah-termoa.jpg",
//     followed: true,
//     name: "Nick",
//     status: "This is just a beginning",
//     location: {country: "Russia", city: "Kazan"}
// },
// {
//     id: 5,
//         ava: "https://www.meme-arsenal.com/memes/be977322b2f450ba30c0e0083441fa9d.jpg",
//     followed: true,
//     name: "Sam",
//     status: "Never look back",
//     location: {country: "Russia", city: "Sochi"}
// },
//     {id: 6, ava: "https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000206/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720", followed: true, name: "Piter", status: "All right!!!", location: {country: "Belarus", city: "Minsk"}},
//     {id: 7, ava: "https://cdn1.flamp.ru/fe8f2039f0b6422ec0d6e9a500929758.jpeg", followed: true, name: "Alex", status: "All right!!!", location: {country: "Russia", city: "Moscow"}},
//     {id: 8, ava: "https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg", followed: true, name: "Mike", status: "All right!!!", location: {country: "Russia", city: "Moscow"}},
