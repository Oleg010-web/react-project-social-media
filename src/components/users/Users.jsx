import React from 'react';
import UsersStyles from './Users.module.css';
const Users = (props) => {
    if(props.users.length == 0){
        props.setUsers([
            {id:1 , fullname: 'Vovan', followed: true, status : 'Working for my new IT project, drinking coctail in Bagama', location : {country : 'Bagama', city: 'Нассау'}, photo: "https://peopletalk.ru/wp-content/uploads/2018/01/ap5a5p-640x473.jpg"},
            {id: 2, fullname: 'Mila',followed: true, status : 'Love horses)', location : {country : 'Russia', city: 'Moscow'}, photo: "https://mtdata.ru/u17/photo92AD/20050228516-0/original.jpg"},
            {id: 3, fullname: 'Olga',followed: false, status : 'Going to finisn my study in my university, im so close))', location : {country : 'Russia', city: 'Moscow'}, photo: "https://s.zefirka.net/images/2020-10-28/krasivye-devushki-v-obtyagivayushhix-platyax/krasivye-devushki-v-obtyagivayushhix-platyax-1.jpg"},
            {id: 4, fullname: 'Robert', followed: true, status : 'Working for my new game, watch my social media)', location : {country : 'Russia', city: 'Ulyanovsk'}, photo: "https://i.pinimg.com/originals/1e/a0/cd/1ea0cdb656a1c785f1e691e1b3925adb.jpg" },
            {id: 5, fullname: 'Kirill', followed: true, status : 'New sort is upcoming))))))', location : {country : 'Russia', city: 'Ulyanovsk'}, photo: "https://i.pinimg.com/originals/b8/d7/84/b8d784316ad8c8d290075266aa2d96c9.jpg"},
            {id: 6, fullname: 'Joey', followed: false, status : 'Wait you on my concert in Moscow!) See you, it will be fun)', location : {country : 'Sweden', city: 'Stockholm'}, photo: "https://i.pinimg.com/originals/38/12/60/3812600e5d24110db37e5b038b8b780f.jpg"}
        ])
    }    


    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo} alt="" className={UsersStyles.avatarka}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Follow</button> : <button onClick={() => {props.follow(u.id)}}>UnFollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;