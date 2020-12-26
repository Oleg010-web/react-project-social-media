import profilecss from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    return <div className={profilecss.PostsBlock}>
      <h3>My posts</h3>
      <div>
        New posts
        <form action="" method="post">
          <div className={profilecss.textareaBlock}>
            <textarea name="" id="" rows="8" placeholder="Your message"  className={profilecss.textareaPost}></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
        </form>
      </div>
      <div className={profilecss.posts}>
        <Post message="Want travel to sea. Like photos please)" likeCount="25"/>
        <Post message="Hi, everyone)This is my first post))" likeCount="30"/>
      </div>
    </div>
}

export default MyPosts;