import React from "react";
import ProfileImage from "./ProfileImage/ProfileImage";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import DownloadButton from "../DownloadButton/DownloadButton";

const Profile = () => {
  return (
    <div className="main-profile-container">
      <ProfileImage />
      <ProfileInfo />
      <DownloadButton />
    </div>
  );
}

export default Profile;
