import profilecss from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (
        <div>
          <div className={profilecss.content}>
            <div>
              <img src="https://www.forumdaily.com/wp-content/uploads/2016/06/Depositphotos_28019327_m-2015.jpg"/>
            </div>
            <div className={profilecss.descriptionBlock}>
              ava + description
            </div>
        </div>
      </div>
    )
}

export default ProfileInfo;