const Follow = 'Follow';
const UnFollow = 'Unfollow';
const SetUsers = 'SET_USERS';
const SetCurrentPage = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    users : [],
    pageSize : 5,
    totalUsersCount : 20,
    currentValue : 1,
    isFetching : false
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

        case UnFollow:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u ;
                })
            }

        case SetUsers:
            return {...state, users: action.users }    
        case SetCurrentPage:
            return {...state, currentValue : action.currentPage}   
        case SET_TOTAL_USERS_COUNT :
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_IS_FETCHING :
            return {... state, isFetching: action.isFetching}         
        default:
            return state;
    }
}
export const follow = (userID) => ({type : Follow, userID })
export const unFollow = (userID) => ({type : UnFollow, userID})
export const setUsers = (users) => ({type : SetUsers, users})
export const setCurrentPage = (currentPage) => ({type: SetCurrentPage, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})

export default usersReducer ;