import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Dialogscss from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

   

    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messagesData.map(m => <Message text={m.text}/>)

    return (
        <div>
            <div className={Dialogscss.wrapper}>
                <div className={Dialogscss.wrapperItems}>
                    {dialogsElements}
                </div>
                <div className={Dialogscss.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;