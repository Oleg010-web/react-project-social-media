const PROFILE_DATA = 'ProfileData';

let initialState = {
    PostData : [
        {message: 'Want travel to sea. Like photos please)', likeCount: 25},
        {message: 'Hi, everyone)This is my first post))', likeCount: 30}
    ],
    PostChange: "",
    ProfileData: null
    }

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD-POST': {       
            let postData ={
                message: state.PostChange,
                likeCount: 0
        
            }
            return {
                ...state,
                PostData: [postData,...state.PostData],
                PostChange : ""
            }
        }
        case 'TEXT-POST-CHANGE': { 
            return {
                ...state,
                PostChange: action.textChanger
            }   
        }
        case PROFILE_DATA: {
            return {
                ...state,
                ProfileData: action.ProfileDataUser
            }
        }
        default :  return state; 
        }
}   
export const addPostActionCreator = () => ({type : 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) => ({type : 'TEXT-POST-CHANGE', textChanger : text})
export const ProfileDataUser = (ProfileDataUser) => ({type: PROFILE_DATA, ProfileDataUser})

export default profileReducer ;
