import React from "react";

const ProfileCard = ({ data }) => {
  const { profilePic, name, email, phone } = data;
  return (
    <div className="profile-card">
      <img className="profile-pic" src={profilePic} alt={name} />
      <div className="profile-name">{name}</div>
      <div className="profile-email">{email}</div>
      <div className="profile-phone">{phone}</div>
    </div>
  );
};

export default ProfileCard;
