import React from 'react';
import '../styles/Project.css';

function Footer() {
  return (
<footer className="fixed-bottom bg-dark text-light text-center py-4" style={{ height: '10%',width: '100%', marginTop: '50px', hemargin: ' auto', zIndex: '1' }}>
      <div className="footer-container">
        <div className="row">
         <div className="col">
            <a href="https://github.com/anthogr45?tab=repositories">
            <i className="fab fa-github"></i>
            GitHub
            </a>
            <div className="col">
            {/* <span className="spacer">     </span> */}
           <a href="https://www.linkedin.com/in/anthony-gooneratne-pmp">
            <i className="fab fa-linkedin"></i>
            LinkedIn
           </a>
          </div>
        </div>
        <div className="row mt-2">
      <div className="col">
        &nbsp;
        </div>
        </div>
  </div>
  </div>
        
      
    </footer>
  );
}

export default Footer;