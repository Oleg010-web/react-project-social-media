import profilecss from "./MyPosts.module.css";
import Post from "./post/Post";
import React from 'react';


const MyPosts = (props) => {



  let postElements = props.arrayData.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
  let textPost = React.createRef();
  let addPost = () => {
    let text = textPost.current.value;
    alert(text)
  }
    return <div className={profilecss.PostsBlock}>
      <h3>My posts</h3>
      <div>
        New posts
        <form action="" method="post">
          <div className={profilecss.textareaBlock}>
            <textarea name="" id="" rows="8" placeholder="Your message" ref={textPost} className={profilecss.textareaPost}></textarea>
          </div>
          <div>
            <button onClick={addPost}>Send</button>
          </div>
        </form>
      </div>
      <div className={profilecss.posts}>
          {postElements}
      </div>
    </div>
}

export default MyPosts;