import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import DialogsContainer from './components/dialogs/DialogsContainer';
import NavbarContainer from './components/navbar/NavbarContainer';
import UsersContainer from './components/users/UsersContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() =><DialogsContainer />}
          />
          <Route path='/profile' render={()=><Profile />}
          />
          <Route path='/users' render={()=> <UsersContainer />}
          />
          <Route path='/news' render={()=><News/>}/>
          <Route path='/music' render={()=><Music/>}/>
          <Route path='/settings' render={()=><Settings/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
