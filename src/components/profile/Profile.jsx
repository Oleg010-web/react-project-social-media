import MyPosts from "./myPosts/MyPosts";
import profilecss from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  
    return  (

      <div>
        <div>
          <ProfileInfo />
          <MyPosts arrayData={props.postsData} />
          </div>
      </div>
    )
}

export default Profile;