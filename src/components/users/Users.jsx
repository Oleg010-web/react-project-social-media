import axios from 'axios';
import React from 'react';
import UsersStyles from './Users.module.css';
import avataraPhoto from '../../assets/images/avatara.png';

class Users extends React.Component {

    constructor(props){
        super(props);
    } 
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentValue}&count=${this.props.pageSize}`).then(Response => {
            this.props.setUsers(Response.data.items);
            this.props.setTotalUsersCount(Response.data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentValue}&count=${this.props.pageSize}`)
            .then(Response => {
                this.props.setUsers(Response.data.items)
            });
    };
    render () {
        let pageNumbers = Math.ceil (this.props.totalUsersCount / this.props.pageSize) ;
        let pages = [];
        for (let i = 1; i <= pageNumbers; i++){
            pages.push(i);      
        }
        return <div>
            <div className={UsersStyles.pageCount}>
             {pages.map((p, index) => {
                 {if( index < 5 || index === pages.length - 1){
                    return <span key={p.totalCount} onClick={() =>{this.onPageChanged(p)}}className={this.props.currentValue === p && UsersStyles.selected }>{p}</span> ; 
                 }}
            })}
               
            </div>
            {
                this.props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : avataraPhoto } alt="" className={UsersStyles.avatarka}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={()=>{this.props.unfollow(u.id)}}>Follow</button> : <button onClick={() => {this.props.follow(u.id)}}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    }
}


export default Users;