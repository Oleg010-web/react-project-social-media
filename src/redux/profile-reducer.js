const profileReducer = (state, action) => {
    switch (action.type){
        case 'ADD-POST':        
            let postData ={
                message: state.PostChange,
                likeCount: 0
        
            }
            state.PostData.unshift(postData);
            state.PostChange = "";
            return state;
        case 'TEXT-POST-CHANGE':    
            state.PostChange  = action.textChanger;
            return state;
        default :  return state; 
        }
}   
export const addPostActionCreator = () => ({type : 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) => ({type : 'TEXT-POST-CHANGE', textChanger : text})

export default profileReducer ;
