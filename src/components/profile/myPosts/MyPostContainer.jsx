import profilecss from "./MyPosts.module.css";
import Post from "./post/Post";
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

 let state = props.store.getState();
 
  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let changeTextArea = (text)=>{
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action)
  }
 return <MyPosts addPost = {addPost} changeTextArea = {changeTextArea} PostChange={state.profilePage.PostChange} arrayData={state.profilePage.PostData} />;
}
export default  MyPostsContainer;