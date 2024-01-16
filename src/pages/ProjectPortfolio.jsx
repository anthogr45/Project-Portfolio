

import '../styles/Project.css';
import { MarkGithubIcon } from '@primer/octicons-react';
import Weather from '../assets/images/Weather.png';

  var project = [
    {
       name: "WeatherDashboard",
       url: "https://anthogr45.github.io/WeatherDashboard/",
       imagePath: Weather,
       githublink: "https://github.com/anthogr45/WeatherDashboard"
    },
    {
      name: "PWA: Text Editor",
      url: "https://stormy-brushlands-38378-2a25ffa26458.herokuapp.com",
      imagePath: "../src/assets/images/TextEditorAnthoG.png",
      githublink: "https://github.com/anthogr45/-Progressive-Web-Applications-Text-Editor"
    },
    {
      name: "Find Your Movie (purple turtle)",
      url: "https://jizhang80.github.io/project1-purpleTurtle/",
      imagePath: "../src/assets/images/Movie.jpg",
      githublink: "https://github.com/anthogr45/project1-purpleTurtle?tab=readme-ov-file"
    },
    {
      name: "Note Taker",
      url: "https://floating-scrubland-52573-663844fb84ec.herokuapp.com/",
      imagePath: "../src/assets/images/Notetaker.png",
      githublink: "https://github.com/anthogr45/NoteTaker?tab=readme-ov-file"
    },
    {
      name: "Dailyplanner",
      url: "https://anthogr45.github.io/Dailyplanner/",
      imagePath: "../src/assets/images/DailyPlanner.png",
      githublink: "https://github.com/anthogr45/Dailyplanner"
    },
    {
      name: "Antho-G: Tech-Blog",
      url: "https://fierce-ridge-25865-7ffb2efa6e88.herokuapp.com",
      imagePath: "../src/assets/images/Techblog.png",
      githublink: "https://github.com/anthogr45/Tech-Blog?tab=readme-ov-file"
    },

  ]

  const Portfolio = () => {
    return (
      <div className="container mt-5" style={{ marginTop: '150px', marginBottom: '150px' }}>
      <div className="row justify-content-between gap">
        {project.map((project, index) => (
          <div className="col-md-4 col-sm-6 card repos-container top-margin container mt-5 gap text-center" key={index}>
            <div className="card-img-container">
              <img src={project.imagePath} className="card-img-top card-image" alt={project.name} />
            </div>
            <div className="card-body">
              <h5 className="card-title header-font">{project.name}</h5>
              <p className="card-text">Check out the project <a rel="noopener noreferrer" href={project.url}>here</a></p>
              <a href={project.githublink} target="_blank" rel="noopener noreferrer"><MarkGithubIcon size={25} /> GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  };
  
  export default Portfolio;