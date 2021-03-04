import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, setUsers, setTotalUsersCount, unFollow } from '../../redux/users-reducer';
import UsersStyles from './Users.module.css';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersApiComponent extends React.Component {

    constructor(props){
        super(props);
    } 
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentValue}&count=${this.props.pageSize}`).then(Response => {
            this.props.setUsers(Response.data.items);
            this.props.setTotalUsersCount(Response.data.totalCount);
            this.props.setIsFetching(false);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(Response => {
                this.props.setIsFetching(false);
                this.props.setUsers(Response.data.items)
            });
    };
    render () {  
        return <>
                <Preloader isFetching={this.props.isFetching} />
                <Users 
                    onPageChanged = {this.onPageChanged} 
                    totalUsersCount = {this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentValue = {this.props.currentValue}
                    users = {this.props.users}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}
                    isFetching = {this.props.isFetching}
                />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentValue : state.usersPage.currentValue,
        isFetching : state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {dispatch(followAC(userID))},
//         unfollow: (userID) => {dispatch(unFollowAC(userID))},
//         setUsers: (users) => {dispatch(setUsersAC(users))},
//         setCurrentPage : (pageNumber) =>{dispatch(setCurrentPageAC(pageNumber))},
//         setTotalUsersCount : (totalCount) => {dispatch(setUsersTotalCountAC(totalCount))},
//         setIsFetching : (isFetching) => {dispatch(setIsFetchingAC(isFetching))}
//     }
// }

const UsersContainer = connect (mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount
})(UsersApiComponent);
export default UsersContainer;