import axios from 'axios';
import React from 'react';
import UsersStyles from './Users.module.css';
import avataraPhoto from '../../assets/images/avatara.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

        let pageNumbers = Math.ceil (props.totalUsersCount / props.pageSize) ;
        let pages = [];
        for (let i = 1; i <= pageNumbers; i++){
            pages.push(i);      
        }
        return <div>
            <div className={UsersStyles.pageCount}>
             {pages.map((p, index) => {
                 {if( index < 5 || index === pages.length - 1){
                    return <span key={p.totalCount} onClick={()=>{props.onPageChanged(p)}} className={props.currentValue === p && UsersStyles.selected }>{p}</span> ; 
                 }}
            })}
               
            </div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : avataraPhoto } alt="" className={UsersStyles.avatarka}/>
                            </NavLink>
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