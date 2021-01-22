import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import DialogsContainer from './components/dialogs/DialogsContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar state={props.state.navbarPage.navbarData}/>
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() =><DialogsContainer 
            store = {props.store}
          />}
          />
          <Route path='/profile' render={()=><Profile 
            store={props.store}
            />}
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
