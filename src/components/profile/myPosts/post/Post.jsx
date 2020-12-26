import profilecss from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={profilecss.item}>
          <img src="https://www.onetwotrip.com/ru/blog/wp-content/uploads/2016/10/surfer-blue-ocean-wave-tube-getting-barreled.jpg" alt=""/>
          <div className={profilecss.messageBlock}>
            {props.message}
          </div>
          <div className={profilecss.count}>
            <span>{props.likeCount} Likes</span>
          </div>
        </div>
    )  
}

export default Post;