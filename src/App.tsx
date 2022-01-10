import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialog/Dialogs";
import {ProFile} from "./components/Profile/ProFile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {store, StoreType,} from "./redux/state";

type AppStateTypes = {
    store: StoreType
}

function App(props: AppStateTypes) {
    const state = props.store.getState();
    return (
        <div className={'app-wrapper'}>
            <Router>
                <Header/>
                <NavBar/>

                <Routes>
                    <Route path='/' element={
                        <ProFile
                            posts={state.profilePage}
                            dispatch={props.store.dispatch.bind(store)}
                        />
                    }/>
                    <Route path='/dialogs/*' element={
                        <Dialogs
                            dialogs={state.messagePage.dialogs}
                            messages={state.messagePage.messages}
                            newMessage={state.messagePage.newMessage}
                            dispatch={props.store.dispatch.bind(store)}
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


