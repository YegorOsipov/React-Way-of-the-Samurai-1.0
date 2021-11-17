import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialog/Dialogs";
import {ProFile} from "./components/Profile/ProFile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {StateTypes} from "./redux/state";

type AppStateTypes = {
    state: StateTypes
}

function App(props: AppStateTypes) {
    return (
        <div className={'app-wrapper'}>
            <Router>
                <Header/>
                <NavBar/>

                <Routes>
                    <Route path='/' element={<ProFile posts={props.state.profilePage.posts}/>}/>
                    <Route path='/dialogs/*' element={
                        <Dialogs
                            dialogs={props.state.messagePage.dialogs}
                            messages={props.state.messagePage.messages}
                        />
                    }/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>

            </Router>
        </div>

    );
}

export default App;


