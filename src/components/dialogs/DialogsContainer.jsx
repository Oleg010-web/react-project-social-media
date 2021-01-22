import { NavLink } from 'react-router-dom';
import React from 'react';
import { dialogPostActionCreator, messagePostChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let dialogsData=props.store.getState().dialogsPage.dialogsData; 
    let dispatch=props.store.dispatch;
    let messageChange=props.store.getState().dialogsPage.messageChange ;
    let messagesData=props.store.getState().dialogsPage.messagesData;
    let sendTextarea = () => {
        dispatch(dialogPostActionCreator())
    }
    let changeMessage =(text)=>{
        dispatch(messagePostChangeActionCreator(text))    
    }


    return <Dialogs dialogsData={dialogsData} dispatch={dispatch} messageChange={messageChange} messagesData={messagesData} sendTextarea={sendTextarea} changeMessage={changeMessage}/>
}

export default DialogsContainer;