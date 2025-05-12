import React from "react";
import ProfileCard from "../components/ProfileCard";
import SkillsList from "../components/SkillsList";
import GithugLogo from "../assets/github_logo.png"


const AboutPage = () => {
  const skills = ["Java", "Spring", "Docker", "Github Actions"];

  return (
    <div className="about-container">
      <h2>자기소개</h2>
      <ProfileCard />
      <SkillsList skills={skills} />
      <h2>링크</h2>
      <a href="https://github.com/dohyunk58"><img src={GithugLogo} alt="" width="10%"/></a>
    </div>
  );
};

export default AboutPage; 