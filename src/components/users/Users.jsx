import axios from 'axios';
import React from 'react';
import UsersStyles from './Users.module.css';
import avataraPhoto from '../../assets/images/avatara.png';

const Users = (props) => {

    const getUsers = () => {
        if(props.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(Response => {
                props.setUsers(Response.data.items)
            })
        }  
    }   
    return <div>
        <button onClick={getUsers}>Show Users</button>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : avataraPhoto } alt="" className={UsersStyles.avatarka}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Follow</button> : <button onClick={() => {props.follow(u.id)}}>Unfollow</button>}
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

export default Users;