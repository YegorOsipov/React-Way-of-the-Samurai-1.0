import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {ProFile} from "./components/Profile/ProFile";

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <ProFile />
        </div>
    );
}

export default App;

