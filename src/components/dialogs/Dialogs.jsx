import { NavLink } from 'react-router-dom';
import Dialogscss from './Dialogs.module.css';

const DialogItem = (props) => {
    return <div className={Dialogscss.wrapperItem}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={Dialogscss.active}>{props.name}</NavLink>
        </div>
}

const Message =(props) =>{
    return <div className={Dialogscss.message}>{props.text}</div>
}

const Dialogs = (props) => {
    return (
        <div>
            <div className={Dialogscss.wrapper}>
                <div className={Dialogscss.wrapperItems}>
                    <DialogItem name="Vovan" id="1"/>
                    <DialogItem name="Mila" id="2" />
                    <DialogItem name="Olga" id="3"/>
                    <DialogItem name="Robert" id="4"/>
                    <DialogItem name="Kirill" id="5"/>
                    <DialogItem name="Joey" id="6"/>
                </div>
                <div className={Dialogscss.messages}>
                    <Message text="Will you go to bar after concert?"/>
                    <Message text="Hope to see you soon)"/>
                    <Message text="Hi, how are you?"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;