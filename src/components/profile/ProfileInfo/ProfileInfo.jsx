import Preloader from '../../common/Preloader/Preloader';
import profilecss from './ProfileInfo.module.css';
const ProfileInfo = (props) => {
  if (!props.profileData) {
    return  <Preloader />
  }
    return (
        <div>
          <div className={profilecss.content}>
            <div>
              <img src="https://www.forumdaily.com/wp-content/uploads/2016/06/Depositphotos_28019327_m-2015.jpg"/>
            </div>
            <div className={profilecss.descriptionBlock}>
                <img src={props.profileData.photos.large} alt=""/>
                <div className={profilecss.userinfoblock}>
                    <div className={profilecss.fullName}>{props.profileData.fullName}</div>
                    <div>Looking job: {props.profileData.lookingForAJobDescription}</div>
                    <h4>My contacts: </h4>
                    <div className={profilecss.contactsUser}>
                        <div>
                           <a href={props.profileData.contacts.vk}><img src="https://cdn.worldvectorlogo.com/logos/vk-1.svg" alt="ТЫК"/></a>
                        </div>
                        <div>
                          <a href={props.profileData.contacts.github}><img src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt=""/></a>
                        </div>
                        <div>
                          <a href={props.profileData.contacts.instagram}><img src="https://77vorota.ru/local/src/images/adPro/instagram.png" alt=""/></a>
                        </div>
                        <div>
                          <a href={props.profileData.contacts.twitter}><img src="https://logospng.org/download/twitter/logo-twitter-2048.png" alt=""/> </a>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
      </div>
    )
}

export default ProfileInfo;