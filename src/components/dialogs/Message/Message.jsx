import Dialogscss from './../Dialogs.module.css';



const Message =(props) =>{
    return <div className={Dialogscss.message}>{props.text}</div>
}



export default Message;