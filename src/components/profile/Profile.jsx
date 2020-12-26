import MyPosts from "./myPosts/MyPosts";
import profilecss from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
    return  (
      <div>
        <div>
          <ProfileInfo />
          <MyPosts/>
          </div>
      </div>
    )
}

export default Profile;