import profilecss from "./Profile.module.css";
const Profile = () => {
    return <div className={profilecss.content}>
    <div>
      <img src="https://www.forumdaily.com/wp-content/uploads/2016/06/Depositphotos_28019327_m-2015.jpg"/>
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New posts
      </div>
      <div className={profilecss.posts}>
        <div className={profilecss.item}>
          Post 1
        </div>
        <div className={profilecss.item}>
          Post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;