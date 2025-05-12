import React from "react";
import Image from "../assets/profile.png";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={Image} alt="프로필" width="20%"/>
      <div className="profile-info">
        <h3>김도현</h3>
        <p>
          <ul>
            <li>DGU ICE 20</li>
            <li>DGU CAPS 37.5</li>
            <li>DGU FarmSystem 4</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard; 