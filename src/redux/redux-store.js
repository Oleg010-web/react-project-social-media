import { combineReducers, createStore } from "redux";
import dialogReduser from "./dialogs-reducer";
import navbarReduser from "./navbar-reducer";
import profileReducer from "./profile-reducer";

let redusers = combineReducers({
    dialogsPage: dialogReduser,
    profilePage: profileReducer,
    navbarPage: navbarReduser
})

let store = createStore(redusers);

export default store;