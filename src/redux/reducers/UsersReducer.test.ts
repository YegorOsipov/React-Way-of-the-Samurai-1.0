import {
    ChangeCurrentPageAC,
    ChangeFollowAC,
    SetUsersAC,
    SetUsersTotalCountAC,
    UsersPageType,
    UsersReducer
} from "./UsersReducer";

test("check changing following user", () => {
   const startState: UsersPageType = {
       users: [
           {id: 1, photos: {small: "", large: ""}, followed: true, name: "Leon", status: "My life my rules", location: {country: "Russia", city: "Moscow"}},
           {id: 2, photos: {small: "", large: ""}, followed: true, name: "David", status: "Now or never", location: {country: "Russia", city: "Moscow"}},
           {id: 3, photos: {small: "", large: ""}, followed: true, name: "Sergio", status: "I’ll get everything I want", location: {country: "Ukraine", city: "Kiev"}},
           {id: 4, photos: {small: "", large: ""}, followed: true, name: "Nick", status: "This is just a beginning", location: {country: "Russia", city: "Kazan"}},
           {id: 5, photos: {small: "", large: ""}, followed: true, name: "Sam", status: "Never look back", location: {country: "Russia", city: "Sochi"}},
       ],
       pageSize: 5,
       totalUsersCount: 53,
       currentPage: 1
   };

   const endState = UsersReducer(startState, ChangeFollowAC(startState.users[1].id, startState.users[1].followed));

   expect(endState.users.length).toBe(5);
   expect(endState.users[1].followed).toBe(!startState.users[1].followed);
});

test("check added users", () => {
    const startState: UsersPageType = {
        users: [],
        pageSize: 5,
        totalUsersCount: 53,
        currentPage: 1
    };

    const newUsers = [
        {id: 1, photos: {small: "", large: ""}, followed: true, name: "Leon", status: "My life my rules", location: {country: "Russia", city: "Moscow"}},
        {id: 2, photos: {small: "", large: ""}, followed: true, name: "David", status: "Now or never", location: {country: "Russia", city: "Moscow"}},
    ];
    const endState = UsersReducer(startState, SetUsersAC(newUsers));

    expect(endState.users.length).toBe(2);
    expect(endState.users[0].name).toBe("Leon");
});

test("check changing current page", () => {
    const startState: UsersPageType = {
        users: [
            {id: 1, photos: {small: "", large: ""}, followed: true, name: "Leon", status: "My life my rules", location: {country: "Russia", city: "Moscow"}},
            {id: 2, photos: {small: "", large: ""}, followed: true, name: "David", status: "Now or never", location: {country: "Russia", city: "Moscow"}},
            {id: 3, photos: {small: "", large: ""}, followed: true, name: "Sergio", status: "I’ll get everything I want", location: {country: "Ukraine", city: "Kiev"}},
            {id: 4, photos: {small: "", large: ""}, followed: true, name: "Nick", status: "This is just a beginning", location: {country: "Russia", city: "Kazan"}},
            {id: 5, photos: {small: "", large: ""}, followed: true, name: "Sam", status: "Never look back", location: {country: "Russia", city: "Sochi"}},
        ],
        pageSize: 5,
        totalUsersCount: 53,
        currentPage: 1
    };

    const newValue = 2;
    const endState = UsersReducer(startState, ChangeCurrentPageAC(newValue));

    expect(endState.users.length).toBe(5);
    expect(endState.currentPage).toBe(newValue);
});

test("check changing total users count", () => {
    const startState: UsersPageType = {
        users: [
            {id: 1, photos: {small: "", large: ""}, followed: true, name: "Leon", status: "My life my rules", location: {country: "Russia", city: "Moscow"}},
            {id: 2, photos: {small: "", large: ""}, followed: true, name: "David", status: "Now or never", location: {country: "Russia", city: "Moscow"}},
            {id: 3, photos: {small: "", large: ""}, followed: true, name: "Sergio", status: "I’ll get everything I want", location: {country: "Ukraine", city: "Kiev"}},
            {id: 4, photos: {small: "", large: ""}, followed: true, name: "Nick", status: "This is just a beginning", location: {country: "Russia", city: "Kazan"}},
            {id: 5, photos: {small: "", large: ""}, followed: true, name: "Sam", status: "Never look back", location: {country: "Russia", city: "Sochi"}},
        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1
    };

    const totalCount = 22;
    const endState = UsersReducer(startState, SetUsersTotalCountAC(totalCount));

    expect(endState.users.length).toBe(5);
    expect(endState.totalUsersCount).toBe(totalCount);
});
