import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialog/DialogsConteiner";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

// type PropsType = {
//     store: StoreType
// }

function App() {
        return (
        <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavBar/>

                <Routes>
                    <Route path="/profile" element={<ProfileContainer />}>
                        <Route path=":userId" element={<ProfileContainer />} />
                    </Route>

                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>

                    <Route path='/users/' element={<UsersContainer/>}/>

                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
        </div>

    );
}

export default App;

