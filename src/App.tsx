import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {ProFile} from "./components/Profile/ProFile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialog/DialogsConteiner";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";

// type PropsType = {
//     store: StoreType
// }

function App() {
        return (
        <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>

                <Routes>
                    <Route path='/' element={<ProfileContainer/>}/>  {/*главная*/}
                    <Route path='/profile/' element={<ProfileContainer />}/>
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

