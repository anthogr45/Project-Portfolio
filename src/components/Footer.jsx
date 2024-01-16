import React from 'react';
import '../styles/Project.css';
import { MarkGithubIcon, } from '@primer/octicons-react';


function Footer() {
  return (
<footer className="fixed-bottom bg-dark text-light text-center py-4" style={{ height: '10%', width: '100%', marginTop: '50px', margin: 'auto', zIndex: '1' }}>
      <div className="footer-container">
        <div className="row">
          <div className="col">

            <a href="https://github.com/anthogr45?tab=repositories" className="text-light">
            <MarkGithubIcon size={25}></MarkGithubIcon> GitHub
            </a>
          </div>
          <div className="col">
            {/* Reduce spacing between the icons */}
            <span className="spacer"></span>
            <a href="https://www.linkedin.com/in/anthony-gooneratne-pmp" className="text-light">
             LinkedIn
              
            </a>
          </div>
        </div>
        {/* Add more social media links here with appropriate spacing */}
      </div>
    </footer>
  );
}

export default Footer;