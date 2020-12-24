import profilecss from "./MyPosts.module.css";
import Post from "./myPosts/post/Post";

const MyPosts = () => {
    return <div>
      My posts
      <div>
        New posts
        <form action="" method="post">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>
      <div className={profilecss.posts}>
        <Post message="Want travel to sea. Like photos please)" likeCount="25"/>
        <Post message="Hi, everyone)This is my first post))" likeCount="30"/>
      </div>
    </div>
}

export default MyPosts;