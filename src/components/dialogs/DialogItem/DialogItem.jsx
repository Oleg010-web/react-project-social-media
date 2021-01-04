import { NavLink } from 'react-router-dom';
import Dialogscss from './../Dialogs.module.css';

const DialogItem = (props) => {
    return <div className={Dialogscss.wrapperItem}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={Dialogscss.active}> <img src={props.photo} alt=""/> {props.name}</NavLink>
        </div>
}



export default DialogItem;