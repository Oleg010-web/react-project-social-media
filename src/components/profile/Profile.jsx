import MyPostsContainer from "./myPosts/MyPostContainer";
import MyPosts from "./myPosts/MyPosts";
import profilecss from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  
    return  (

      <div>
        <div>
          <ProfileInfo />
          <MyPostsContainer store={props.store}/>
          </div>
      </div>
    )
}

export default Profile;