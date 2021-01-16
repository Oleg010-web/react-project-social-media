const dialogReduser = (state, action) => {
    switch (action.type) {
        case 'DIALOG-POST':
            let messageData ={
                text: state.messageChange
            }
            state.messagesData.push(messageData);
            state.messageChange= ""; 
            return state;;
        case  'MESSAGE-POST-CHANGE' :
            state.messageChange = action.messageChenger;  
            return state; 
        default:
            return state;
    }
}
export const dialogPostActionCreator = () => ({type : 'DIALOG-POST'})
export const messagePostChangeActionCreator = (text) => ({type : 'MESSAGE-POST-CHANGE', messageChenger : text})

export default dialogReduser ;