import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Dialogscss from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import { dialogPostActionCreator, messagePostChangeActionCreator } from '../../redux/store';


const Dialogs = (props) => {

   

    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} photo={d.photo}/>)
    let messagesElements = props.messagesData.map(m => <Message text={m.text}/>)
    let textareaPost = React.createRef()
    let sendTextarea = () => {
        props.dispatch(dialogPostActionCreator())
    }
    let changeMessage =()=>{
        let text = textareaPost.current.value
        props.dispatch(messagePostChangeActionCreator(text))    
    }

    return (
        <div>
            <div className={Dialogscss.wrapper}>
                <div className={Dialogscss.wrapperItems}>
                    {dialogsElements}
                </div>
                <div className={Dialogscss.messages}>
                    {messagesElements}
                    <div>
                        <textarea onChange={changeMessage} cols="30" rows="5" className={Dialogscss.textareaPost} ref={textareaPost} value={props.messageChange} ></textarea>
                        <button type="button" className={Dialogscss.sendPost} onClick={sendTextarea}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;