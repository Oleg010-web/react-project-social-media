import { combineReducers, createStore } from "redux";
import dialogReduser from "./dialogs-reducer";
import navbarReduser from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let redusers = combineReducers({
    dialogsPage: dialogReduser,
    profilePage: profileReducer,
    navbarPage: navbarReduser,
    usersPage: usersReducer
})

let store = createStore(redusers);

export default store;