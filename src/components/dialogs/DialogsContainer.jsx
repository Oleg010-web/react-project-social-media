import { NavLink } from 'react-router-dom';
import React from 'react';
import { dialogPostActionCreator, messagePostChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        dialogsData : state.dialogsPage.dialogsData,
        messageChange : state.dialogsPage.messageChange,
        messagesData : state.dialogsPage.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendTextarea : () => {dispatch(dialogPostActionCreator())},
        changeMessage : (text) => {dispatch(messagePostChangeActionCreator(text))}
    }
}

const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)

export default DialogsContainer;