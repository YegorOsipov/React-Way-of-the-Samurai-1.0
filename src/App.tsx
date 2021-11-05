/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className={'app-wrapper'}>
      <header className={'header'}>
        <img className={'logo'} src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png" alt={'logo'}/>
      </header>
      <nav className={'nav'}>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
      <div className={'content'}>
        <div>
          <img className={'img-content'} src="http://nomadsclub.ru/uploads/posts/2019-11/1574273694_121011_original.jpg" alt="mountain"/>
        </div>
        <div>
          <img className={"avatar"} src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt="ava"/>
        </div>
      </div>
    </div>
  );
}

export default App;

