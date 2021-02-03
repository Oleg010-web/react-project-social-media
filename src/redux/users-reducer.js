const Follow = 'Follow';
const unFollow = 'Unfollow';
const setUsers = 'SET_USERS';

let initialState = {
    users : []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u ;
                })
            }

        case unFollow:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u ;
                })
            }

        case setUsers:
            return {...state, users: [ ...state.users , ...action.users ]}    
        default:
            return state;
    }
}
export const followAC = (userID) => ({type : Follow, userID })
export const unFollowAC = (userID) => ({type : unFollow, userID})
export const setUsersAC = (users) => ({type : setUsers, users})

export default usersReducer ;