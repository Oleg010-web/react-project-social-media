import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar state={props.state.navbarPage.dialogsData}/>
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() =><Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData}/>}/>
          <Route path='/profile' render={()=><Profile postsData={props.state.profilePage.PostData}/>}/>
          <Route path='/news' render={()=><News/>}/>
          <Route path='/music' render={()=><Music/>}/>
          <Route path='/settings' render={()=><Settings/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
