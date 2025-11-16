import React, { useState } from 'react';
import { IMAGE } from '../../Utils/Theme';
import './Projects.css';

const Projects = () => {
  const [getCard, setGetCard] = useState(1);

  // 🔹 Project Data
  const projects = [
    {
      id: 1,
      title: 'React Portfolio Website',
      date: 'Apr 2024 - May 2024',
      description:
        'A responsive personal portfolio built using React.js and Bootstrap. Showcases smooth UI and reusable components.',
      tech: ['React', 'Bootstrap', 'CSS'],
      category: 'react',
      image: IMAGE.portfolioImage,
      link: 'https://25pallavi.github.io/flippygame.github.io/',

    },
    {
      id: 2,
      title: 'Weather App',
      date: 'Jan 2025 - Feb 2025',
      description:
        'Weather App built with React.js using OpenWeather API to fetch real-time weather updates.',
      tech: ['React', 'API', 'CSS'],
      category: 'react',
      image: IMAGE.weatherappimage,
       link: 'https://myweather-forcast.netlify.app/',
    },
    {
      id: 3,
      title: 'Flappy Bird Game',
      date: 'Dec 2023 - Dec 2023',
      description:
        'A simple fun game created using Vanilla JavaScript and Canvas API.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      tech: ['JavaScript', 'HTML', 'CSS'],
      category: 'js',
      image: IMAGE.jsImage,
      link: 'https://25pallavi.github.io/flippygame.github.io/',
    },
    // {
    //   id: 4,
    //   title: 'Todo App',
    //   date: 'Nov 2023 - Nov 2023',
    //   description:
    //     'A simple and clean task management app using JavaScript and LocalStorage.',
    //   tech: ['JavaScript', 'HTML', 'CSS'],
    //   category: 'js',
    //   image: IMAGE.jsImage,
    // },
  ];

  // 🔹 Filter Logic
  const filteredProjects =
    getCard === 1
      ? projects // All
      : getCard === 2
      ? projects.filter((p) => p.category === 'react')
      : projects.filter((p) => p.category === 'js');

  return (
    <div className="projectsContainer" id="project">
      <div className="container">
        <div className="projectsContainerTop">
          <h2>Projects</h2>
          <p>
            I have worked on a wide range of projects — from web apps to mini
            games. Here are some of my featured works.
          </p>
        </div>

        {/* 🔹 Tabs */}
        <ul className="projectTab">
          <li
            onClick={() => setGetCard(1)}
            className={getCard === 1 ? 'active' : ''}
          >
            All
          </li>
          <li
            onClick={() => setGetCard(2)}
            className={getCard === 2 ? 'active' : ''}
          >
            React JS
          </li>
          <li
            onClick={() => setGetCard(3)}
            className={getCard === 3 ? 'active' : ''}
          >
            JS
          </li>
        </ul>

        {/* 🔹 Filtered Projects */}
        <div className="tabContainer showcard">
          {filteredProjects.map((project) => (
            <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <div className="tabcard">
                    <div className="tabcardImage">
                    <img src={project.image} alt={project.title} />
                    </div>
                    <div className="tabcardContent">
                    <ul>
                        {project.tech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <h5>{project.title}</h5>
                    <span>{project.date}</span>
                    <p>{project.description}</p>
                    </div>
                </div>
                </a>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
