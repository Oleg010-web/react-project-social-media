import React from 'react';
import { connect } from 'react-redux';
import MyPostsContainer from "./myPosts/MyPostContainer";
import axios from 'axios';
import MyPosts from "./myPosts/MyPosts";
import profilecss from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfileDataUser } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {
  constructor(props){
    super(props);
} 
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(Response => {
        this.props.ProfileDataUser(Response.data)
        
    });
  }
  render () {
    return  (
        <div>
          <div>
            <ProfileInfo {...this.props} profileData={this.props.ProfileData}/>
            <MyPostsContainer />
          </div>
        </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    ProfileData: state.profilePage.ProfileData
  }
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {ProfileDataUser})(withUrlDataContainerComponent) ;