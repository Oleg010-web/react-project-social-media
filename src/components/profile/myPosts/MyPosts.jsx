import profilecss from "./MyPosts.module.css";
import Post from "./post/Post";
import React from 'react';


const MyPosts = (props) => {



  let postElements = props.arrayData.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
  let textPost = React.createRef();
  let addPost = () => {
    props.addPost()
    props.textPostChange('')
  }

  let changeTextArea= ()=>{
    let text = textPost.current.value;
    props.textPostChange(text)
  }
    return <div className={profilecss.PostsBlock}>
      <h3>My posts</h3>
      <div>
        New posts
        <form action="" >
          <div className={profilecss.textareaBlock}>
            <textarea  rows="8" onChange={changeTextArea} placeholder="Your message" ref={textPost} className={profilecss.textareaPost} value={props.PostChange}/>
          </div>
          <div>
            <button onClick={addPost} type="button">Send</button>
          </div>
        </form>
      </div>
      <div className={profilecss.posts}>
          {postElements}
      </div>
    </div>
}

export default MyPosts;