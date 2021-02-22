const Follow = 'Follow';
const unFollow = 'Unfollow';
const setUsers = 'SET_USERS';
const setCurrentPage = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users : [],
    pageSize : 5,
    totalUsersCount : 20,
    currentValue : 1
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
            return {...state, users: action.users }    
        case setCurrentPage:
            return {...state, currentValue : action.currentPage}   
        case SET_TOTAL_USERS_COUNT :
            return {...state, totalUsersCount: action.totalUsersCount}     
        default:
            return state;
    }
}
export const followAC = (userID) => ({type : Follow, userID })
export const unFollowAC = (userID) => ({type : unFollow, userID})
export const setUsersAC = (users) => ({type : setUsers, users})
export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export default usersReducer ;