import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {NavBar} from "./components/NavBar";
import {ProFile} from "./components/ProFile";

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

