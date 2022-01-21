import {ChangeFollowAC, UsersPageType, UsersReducer} from "./UsersReducer";

test("check changing following user", () => {
   const startState: UsersPageType = {
       users: [
           {id: 1, photos: {small: "", large: ""}, followed: true, name: "Leon", status: "My life my rules", location: {country: "Russia", city: "Moscow"}},
           {id: 2, photos: {small: "", large: ""}, followed: true, name: "David", status: "Now or never", location: {country: "Russia", city: "Moscow"}},
           {id: 3, photos: {small: "", large: ""}, followed: true, name: "Sergio", status: "I’ll get everything I want", location: {country: "Ukraine", city: "Kiev"}},
           {id: 4, photos: {small: "", large: ""}, followed: true, name: "Nick", status: "This is just a beginning", location: {country: "Russia", city: "Kazan"}},
           {id: 5, photos: {small: "", large: ""}, followed: true, name: "Sam", status: "Never look back", location: {country: "Russia", city: "Sochi"}},
           //     {id: 6, ava: "https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000206/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720", followed: true, name: "Piter", status: "All right!!!", location: {country: "Belarus", city: "Minsk"}},
           //     {id: 7, ava: "https://cdn1.flamp.ru/fe8f2039f0b6422ec0d6e9a500929758.jpeg", followed: true, name: "Alex", status: "All right!!!", location: {country: "Russia", city: "Moscow"}},
           //     {id: 8, ava: "https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg", followed: true, name: "Mike", status: "All right!!!", location: {country: "Russia", city: "Moscow"}},
       ]
   };

   const newValue = false;
   const endState = UsersReducer(startState, ChangeFollowAC(startState.users[1].id, newValue));

   expect(endState.users.length).toBe(5);
   expect(endState.users[1].followed).toBe(newValue);
});