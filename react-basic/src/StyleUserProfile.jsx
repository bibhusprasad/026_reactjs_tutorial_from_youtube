import profileStyle from './css/styleUserProfile.module.css'

function StyleUserProfile() {
  return (
    <div>
      <h3 className={profileStyle.heading}>User Profile</h3>
      <div className={profileStyle.container}>

        <div className={profileStyle.cardStyle}>
          <img className={profileStyle.imgStyle} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
          <div className={profileStyle.nameStyle}>
            <h4>Bibhu Prasad Samal</h4>
            <p>Software Developer</p>
          </div>
        </div>

        <div className={profileStyle.cardStyle}>
          <img className={profileStyle.imgStyle} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
          <div className={profileStyle.nameStyle}>
            <h4>Dibyansh Samal</h4>
            <p>Student</p>
          </div>
        </div>

        <div className={profileStyle.cardStyle}>
          <img className={profileStyle.imgStyle} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
          <div className={profileStyle.nameStyle}>
            <h4>Anil Sidhu</h4>
            <p>React JS Instructor</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StyleUserProfile;