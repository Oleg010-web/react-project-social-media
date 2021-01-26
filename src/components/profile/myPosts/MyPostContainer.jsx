import profilecss from "./MyPosts.module.css";
import Post from "./post/Post";
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";




let mapStateToProps = (state) => {
  return {
    PostChange : state.profilePage.PostChange,
    arrayData : state.profilePage.PostData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost : () => {dispatch(addPostActionCreator())},
    changeTextArea : (text) => {
        let action = updateNewPostTextActionCreator(text)
        dispatch(action)
    }
  }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default  MyPostsContainer;