import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialog/Dialogs";

// import {ProFile} from "./components/Profile/ProFile";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            {/*<div className='app_content'>*/}
            {/*    <ProFile />*/}
            {/*</div>*/}
            <div className='app_content dialog'>
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;


