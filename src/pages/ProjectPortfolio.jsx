
import { MarkGithubIcon } from '@primer/octicons-react';
import Weather from '../assets/images/Weather.png';
import TextEditorAnthoG from '../assets/images/TextEditorAnthoG.png';
import DailyPlanner from '../assets/images/DailyPlanner.png';
import Notetaker from '../assets/images/Notetaker.png';
// import DailyPlanner from '../src/assets/images/DailyPlanner.png';
import Techblog from '../assets/images/Techblog.png';
import '../styles/Project.css';

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
      imagePath: TextEditorAnthoG,
      githublink: "https://github.com/anthogr45/-Progressive-Web-Applications-Text-Editor"
    },
    {
      name: "Find Your Movie (purple turtle)",
      url: "https://jizhang80.github.io/project1-purpleTurtle/",
      imagePath: DailyPlanner,
      githublink: "https://github.com/anthogr45/project1-purpleTurtle?tab=readme-ov-file"
    },
    {
      name: "Note Taker",
      url: "https://floating-scrubland-52573-663844fb84ec.herokuapp.com/",
      imagePath: Notetaker,
      githublink: "https://github.com/anthogr45/NoteTaker?tab=readme-ov-file"
    },
    {
      name: "Dailyplanner",
      url: "https://anthogr45.github.io/Dailyplanner/",
      imagePath: DailyPlanner,
      githublink: "https://github.com/anthogr45/Dailyplanner"
    },
    {
      name: "Antho-G: Tech-Blog",
      url: "https://fierce-ridge-25865-7ffb2efa6e88.herokuapp.com",
      imagePath: Techblog,
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