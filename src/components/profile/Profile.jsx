import MyPosts from "./myPosts/MyPosts";
import profilecss from "./Profile.module.css";
const Profile = () => {
    return <div className={profilecss.content}>
    <div>
      <img src="https://www.forumdaily.com/wp-content/uploads/2016/06/Depositphotos_28019327_m-2015.jpg"/>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts/>
  </div>
}

export default Profile;