import React from "react";
import ProjectCard from "../components/ProjectCard";
import sampleImage from "../assets/calcu.png";
import memeklyImage from "../assets/memekly.png";

/**
 * 프로젝트 페이지 컴포넌트
 * 사용자의 프로젝트들을 카드 형태로 보여주는 페이지
 */
const ProjectsPage = () => {
  const projects = [
    {
      title: "계산기 서비스",
      stack: "React HTML CSS JSX",
      description: "React를 사용하여 만든 계산기 애플리케이션",
      image: sampleImage,
    },
    {
      title: "해물해물 - 해상물류 법률 챗봇 서비스",
      stack: "Flask Streamlit Ollama3",
      description: "해상물류 법률 챗봇 서비스",
      link: "https://github.com/dohyunk58/haemulhaemul",
    },
    {
      title: "Memekly - 밈 랭킹 서비스",
      stack: "Java Spring MongoDB",
      description: "Farmsystem 4기 활동, 밈 랭킹 서비스",
      image: memeklyImage,
      link: "https://github.com/DguFarmSystem/4th-security-S4-BE",
    },
  ];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            stack={project.stack}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
